import { App } from 'vue';
import registerLazy from './lazyImg';
const registerDirectives = (app: App) => {
  registerLazy(app);
};
export default registerDirectives;
