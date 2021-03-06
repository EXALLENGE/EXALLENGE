import Vue from "vue";
import VueResource from "vue-resource";
import VueFriendlyIframe from "vue-friendly-iframe";

import App from "./App.vue";
import * as firebase from "firebase";
import store from "./store";
import router from "./routes";

Vue.config.productionTip = false;

let configOptions = {
  apiKey: "AIzaSyCPnRZJWX2Yr9FpXZjEhlzw66sgi4mMXtg",
  authDomain: "exallenge.firebaseapp.com",
  databaseURL: "https://exallenge.firebaseio.com",
  projectId: "exallenge",
  storageBucket: "exallenge.appspot.com",
  messagingSenderId: "183127626486",
  appId: "1:183127626486:web:8fb4ccfec17a09949b12d7",
  measurementId: "G-8GBR72WH20",
};

firebase.initializeApp(configOptions);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

Vue.use(VueResource);
Vue.use(VueFriendlyIframe);
