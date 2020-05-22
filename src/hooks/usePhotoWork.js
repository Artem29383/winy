import { useCallback, useEffect, useState } from 'react';

export const usePhotoWork = () => {
  const [image, setImage] = useState(null);
  const [lowImage, setLowImage] = useState(null);

  const compressImage = img => {
    const canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    canvas.getContext('2d').drawImage(img, 0, 0);
    const newImgData = canvas.toDataURL(image.type, 0.3);
    fetch(newImgData)
      .then(res => res.blob())
      .then(blob => {
        const file = new File([blob], `low${image.name}`, {
          type: image.type,
        });
        setLowImage(file);
      });
  };

  const createImage = e => {
    const img = document.createElement('IMG');
    img.src = e.target.result;
    img.onload = () => {
      compressImage(img);
    };
  };

  useEffect(() => {
    const reader = new FileReader();
    reader.addEventListener('load', createImage, false);
    if (image) {
      reader.readAsDataURL(image);
    }
    return () => reader.removeEventListener('load', createImage);
  }, [image]);

  const changeHandle = useCallback(
    e => {
      const file = e.currentTarget.files[0];
      if (file) {
        const type = file.type.split('/');
        const size = Math.ceil(file.size / 1024);
        if (type[0] === 'image') {
          if (size < 1500) {
            setImage(file);
          }
        } else if (type[0] !== 'image' || size > 1500) {
          setImage(null);
        }
      }
    },
    [image]
  );
  return { image, lowImage, changeHandle, setImage };
};
