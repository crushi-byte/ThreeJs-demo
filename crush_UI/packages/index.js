import cButton from "./button/index";
import cInput from "./input/index";
const install = (app) => {
  app.use(cButton);
  app.use(cInput);
};
const CUSHUI = {
  install
} 

export { cButton, cInput }; // 按需导入
export default CUSHUI;