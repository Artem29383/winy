import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import EssentialsPlugin from '@ckeditor/ckeditor5-essentials/src/essentials';
import AutoformatPlugin from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import BoldPlugin from '@ckeditor/ckeditor5-basic-styles/src/bold';
import ItalicPlugin from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import HeadingPlugin from '@ckeditor/ckeditor5-heading/src/heading';
import Link from '@ckeditor/ckeditor5-link/src/link';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import CKFinderUploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';

export default class ClassicEditor extends ClassicEditorBase {}

ClassicEditor.builtinPlugins = [
  EssentialsPlugin,
  AutoformatPlugin,
  BoldPlugin,
  ItalicPlugin,
  Underline,
  HeadingPlugin,
  Link,
  Alignment,
  Image,
  ImageToolbar,
  ImageCaption,
  ImageStyle,
  ImageResize,
  ImageUpload,
  CKFinderUploadAdapter,
];

ClassicEditor.defaultConfig = {
  setStartupFocus: true,
  image: {
    toolbar: [
      'imageTextAlternative',
      '|',
      'imageStyle:full',
      'imageStyle:side',
    ],
  },
  ckfinder: {
    // eslint-disable-next-line max-len
    uploadUrl:
      'https://cksource.com/weuy2g4ryt278ywiue/core/connector/php/connector.php?command=QuickUpload&type=Files&responseType=json',
  },
  toolbar: [
    'heading',
    '|',
    'bold',
    'italic',
    'underline',
    'link',
    'alignment',
    'imageUpload',
  ],
  heading: {
    options: [
      { model: 'paragraph', title: '18px', class: 'ck-heading_paragraph' },
      {
        model: 'heading6',
        view: 'h6',
        title: '32px',
        class: 'ck-heading_heading6',
      },
      {
        model: 'heading5',
        view: 'h5',
        title: '24px',
        class: 'ck-heading_heading5',
      },
      {
        model: 'heading4',
        view: 'h4',
        title: '38px',
        class: 'ck-heading_heading4',
      },
      {
        model: 'heading3',
        view: 'h3',
        title: '46px',
        class: 'ck-heading_heading3',
      },
      {
        model: 'heading2',
        view: 'h2',
        title: '52px',
        class: 'ck-heading_heading2',
      },
      {
        model: 'heading1',
        view: 'h1',
        title: '60px',
        class: 'ck-heading_heading1',
      },
    ],
  },
  language: 'en',
};
