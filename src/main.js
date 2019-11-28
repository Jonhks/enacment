import Vue from 'vue'
import firebase from 'firebase'
import App from './App.vue'

var firebaseConfig = {
  apiKey: "AIzaSyDbcR3QA9EXsHEJWUg-BI1JS42KzEWlpe4",
  authDomain: "enacment-e1412.firebaseapp.com",
  databaseURL: "https://enacment-e1412.firebaseio.com",
  projectId: "enacment-e1412",
  storageBucket: "enacment-e1412.appspot.com",
  messagingSenderId: "755216510058",
  appId: "1:755216510058:web:27277124f3aaa45c92ee13"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
