

// Listo, algunos detalles:
// Solo tienes que imprimir y guardar los números que cumplen con alguna de las condiciones, no todos
// En el caso de los que tienen multiples multiplos, imprime el número, no el múltiplo (ej el 15, no 3)
// No lo construyas con ifs en el front, trata de tener el arreglo limpio y ya solo asignar los estilos de manera dinámica
// Puedes revisarlo y me avisas? cualquier cosa escríbeme

// Otra observación, yo guardaría más detalles al objeto en firebase por si se necesitan más adelante como a qué múltiplos corresponde, el color y tomaría como id el número ingresado por el usuario o algo por el estilo




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
