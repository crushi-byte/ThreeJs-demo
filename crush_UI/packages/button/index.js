import cButton from './index.vue'
cButton.install = (app) => {
  app.component(cButton.name,cButton);  
};

export default cButton;