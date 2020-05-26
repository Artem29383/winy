import { useState } from 'react';

export const usePhotoWork = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState([]);
  const [counts, setCounts] = useState(0);
  const [isDisableBtn, setDisableBtn] = useState(false);

  const compressImage = async (img, fileImage) => {
    return new Promise(resolve => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      canvas.getContext('2d').drawImage(img, 0, 0);

      const newImgData = canvas.toDataURL(fileImage.type, 0.3);
      fetch(newImgData)
        .then(res => res.blob())
        .then(blob => {
          const file = new File([blob], `low${fileImage.name}`, {
            type: fileImage.type,
          });
          const newImageData = canvas.toDataURL(fileImage.type, 0.7);
          resolve([newImageData, file]);
        });
    });
  };

  const createImage = (base64, file) => {
    return new Promise(resolve => {
      const img = document.createElement('IMG');
      img.src = base64;
      img.onload = () => {
        resolve(
          compressImage(img, file).then(result => {
            setPreview(result[0]);
            setImage(result[1]);
          })
        );
      };
    });
  };

  const reader = file => {
    return new Promise(resolve => {
      const fileReader = new FileReader();
      fileReader.onload = () => resolve(fileReader.result);
      fileReader.readAsDataURL(file);
    });
  };

  const changeHandle = e => {
    const { files } = e.currentTarget;
    setCounts(files.length);
    setDisableBtn(true);
    Object.values(files).forEach(async file => {
      if (file) {
        const type = file.type.split('/');
        const size = Math.ceil(file.size / 1024);
        if (type[0] === 'image') {
          if (size < 2500) {
            const base64 = await reader(file);
            await createImage(base64, file);
          }
        } else if (type[0] !== 'image' || size > 2500) {
          setImage(null);
        }
      }
    });
  };
  return {
    image,
    changeHandle,
    preview,
    setImage,
    counts,
    setDisableBtn,
    isDisableBtn,
  };
};
