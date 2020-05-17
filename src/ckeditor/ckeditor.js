import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import EssentialsPlugin from '@ckeditor/ckeditor5-essentials/src/essentials';
import AutoformatPlugin from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import BoldPlugin from '@ckeditor/ckeditor5-basic-styles/src/bold';
import ItalicPlugin from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import HeadingPlugin from '@ckeditor/ckeditor5-heading/src/heading';
import Link from '@ckeditor/ckeditor5-link/src/link';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';

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
];

ClassicEditor.defaultConfig = {
  toolbar: ['heading', '|', 'bold', 'italic', 'underline', 'link', 'alignment'],
  language: 'en',
};
