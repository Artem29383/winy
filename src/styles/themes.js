// auth colors
import { treatmentThemesObject } from 'utils/treatmentThemesObject';

const authDark = {
  documentBody: '#151515',
  contentColorBody: '#151515',
  btnBackgroundActive: '#151515',
  btnBackgroundHover: '#242424',
  btnBackgroundActiveRed: '#ff0b00',
  btnBackgroundHoverRed: '#ff1a15',
  btnBackgroundRed: '#ff3a33',
  btnBackground: '#373737',
  inputBorder: '#242424',
  inputBackground: '#151515',
  formBorder: '#242424',
  formBackground: '#000',
  textColor: '#a6a6a6',
  btnTextColor: '#fff',
  inputTextColor: '#ff8b00',
  error: 'red',
  sunColor: '#eedc01',
  moonColor: '#1e1e1e',
  sunInitColor: '#fff',
  success: '#9ACD32',
  loaderColor: '#ff8b00',
  commonLoaderColor: '#ff8b00',
  navigatorColor: '#150f0f',
  navTitleColor: '#fff',
  profileNavColor: '#e59f9f',
  profileNavColorActive: '#fff',
  navItemBgc: '#605353',
  navItemBgcActive: '#2c2222',
  burgerLineColor: '#fff',
  imgBorderColor: '#fff',
  loginUserColor: '#fff',
  followsColor: '#fff',
  followsBorderColor: '#fff',
  leftBorderColor: '#ff1107',
  navItemText: '#cdaaaa',
  navItemTextActive: '#fff',
  settingNav: '#fff',
  settingNavActive: '#dacfdc',
  burgerLineColorActive: '#dacfdc',
};

const authLight = {
  settingNav: '#808080',
  settingNavActive: '#000',
  leftBorderColor: '#0000FF',
  followsBorderColor: '#000',
  imgBorderColor: '#000',
  loginUserColor: '#000',
  followsColor: '#000',
  burgerLineColor: '#808080',
  burgerLineColorActive: '#000',
  navTitleColor: '#000',
  navigatorColor: '#fff',
  profileNavColor: '#836060',
  profileNavColorActive: '#000',
  navItemBgc: '#eaeaea',
  navItemBgcActive: '#ccc',
  navItemText: '#836060',
  navItemTextActive: '#000',
  commonLoaderColor: '#c568ff',
  documentBody: '#fff',
  loaderColor: '#fff',
  success: '#5c7e22',
  sunInitColor: '#fff',
  contentColorBody: '#fff',
  btnBackgroundActive: '#6eb9f7',
  btnBackgroundHover: '#47a7f5',
  btnBackground: '#2196f3',
  btnBackgroundActiveRed: '#ff0b00',
  btnBackgroundHoverRed: '#ff5d56',
  btnBackgroundRed: '#ff7064',
  btnTextColor: '#fff',
  sunColor: '#eedc01',
  moonColor: '#1e1e1e',
  inputBorder: '#4ea5ef',
  inputBackground: '#eff6fb',
  formBorder: '#787dff',
  formBackground: '#eff6fb',
  textColor: '#001',
  inputTextColor: '#8034ef',
  error: 'red',
};

// profileTheme
const lightProfileTheme = {
  lpupdateUserInfo: '#000',
  lptext: '#000',
  lpimgBorder: '#000',
  lpTabsNavigation: '#eee',
  lpTab: '#cdcdcd',
  lpTabActive: '#000',
  lpAfterTab: '#aa33e2',
  lpStatusField: '#000',
};

const darkProfileTheme = {
  lpupdateUserInfo: '#000',
  lptext: '#fff',
  lpimgBorder: '#fff',
  lpTabsNavigation: '#242424',
  lpTab: '#cdcdcd',
  lpTabActive: '#fff',
  lpAfterTab: '#e2231a',
  lpStatusField: '#fff',
};

// modalTheme
const modalLight = {
  modalTitle: '#000',
  modalBgc: '#fff',
};

const modalDark = {
  modalTitle: '#fff',
  modalBgc: '#151515',
};

const fileInputLight = {
  fileIBgc: '#00bfff',
  fileIColor: '#fff',
  progressBarBgc: '#cce',
};

const fileInputDark = {
  fileIBgc: '#242424',
  fileIColor: '#ff5b51',
  progressBarBgc: '#605353',
};

const editorDark = {
  backGroundEditor: '#4A494B',
  foregroundEditor: '#2D2D2F',
  borderEditor: '#393839',
  customWhiteEditor: '#fff',
  borderFocusEditor: '#343638',
  colorTextEditor: '#fff',
  shadowDrop: 'rgba(0, 0, 0, 0.1)',
  shadowInner: 'rgba(0, 0, 0, 0.1)',
  defaultHoverBgcEditor: '#383839',
  defaultHoverBgcActiveEditor: '#333234',
  defaultActiveShadowEditor: '#3B393C',
  mainBgcEditor: '#3a3a3a',
  textEditorMain: '#fff',
  baseBorderEditor: '#464646',
  aboutContentColor: '#fff',
  aboutContentColorLink: '#dded15',
};

const editorLight = {
  aboutContentColorLink: '#de35ed',
  baseBorderEditor: '#c4c4c4',
  textEditorMain: '#000',
  backGroundEditor: '#4A494B',
  foregroundEditor: '#2D2D2F',
  borderEditor: '#393839',
  customWhiteEditor: '#fff',
  borderFocusEditor: '#47A4F5',
  colorTextEditor: '#fff',
  shadowDrop: 'rgba(0, 0, 0, 0.1)',
  shadowInner: 'rgba(0, 0, 0, 0.1)',
  defaultHoverBgcEditor: '#383839',
  defaultHoverBgcActiveEditor: '#333234',
  defaultActiveShadowEditor: '#3B393C',
  mainBgcEditor: '#fff',
  aboutContentColor: '#000',
};

const statusDark = {
  textStatus: 'rgba(255,255,255,0.5)',
};

const statusLight = {
  textStatus: 'rgba(0, 0, 0, 0.5)',
};

const detailsDark = {
  detailsText: 'rgba(255,255,255,0.85)',
  detailsInputBgc: '#151515',
  detailsTitle: '#fff',
  detailsColorTextItem: '#fff',
};

const detailsLight = {
  detailsText: 'rgba(0,0,0,0.85)',
  detailsInputBgc: '#fff',
  detailsColorTextItem: '#000',
  detailsTitle: '#000',
};

const dark = treatmentThemesObject([
  authDark,
  darkProfileTheme,
  modalDark,
  fileInputDark,
  editorDark,
  statusDark,
  detailsDark,
]);
const light = treatmentThemesObject([
  authLight,
  lightProfileTheme,
  modalLight,
  fileInputLight,
  editorLight,
  statusLight,
  detailsLight,
]);

export { dark, light };
