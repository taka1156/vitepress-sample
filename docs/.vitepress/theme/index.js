import ThemeDefault from 'vitepress/dist/client/theme-default';
import WritersBox from '../components/WritersBox.vue';
import NotFound from '../components/NotFound.vue'

export default {
  ...ThemeDefault,
  enhanceApp({ app }) {
    app.component('writers-box', WritersBox);
    app.component('NotFound', NotFound);
  }
};
