<template>
  <div id="app">
    <div>
      <label for="numbers">Ingresa tu numero: </label>
      <input type="number" v-model="limit" id="numbers">
        <div>
          <button @click="evaluated">Calcular</button>
        </div>
      <div v-for="number in arrNum" :key="number" >
        <p v-if="number % 3 === 0 && number % 5 === 0" class="verde"> 3, (5) * </p>
        <p v-if="number % 3 === 0 && number % 7 === 0" class="verde"> 3, (7) * </p>
        <p v-if="number % 5 === 0 && number % 7 === 0" class="rojo"> 5, (7) * </p>
        <p v-else-if="number % 7 === 0" class="morado">{{ number }} </p>
        <p v-else-if="number % 5 === 0" class="rojo">{{ number }} </p>
        <p v-else-if="number % 3 === 0" class="verde">{{ number }} </p>
        <p v-else>{{number}}</p>

      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {

  name: 'app',
  data (){
    return {
      arrNum: [],
      limit: 0
    }
  },
  methods: {
    evaluated: function () {
      for(let i = 1; i <= this.limit; i++){ 
        this.arrNum.push(i)
      }

       var db = firebase.firestore();
       db.collection("numbers").add({
       arrnum: this.arrNum
    })

    },
    printnumber: function (number){
      return number
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.morado {
  color: rgb(117, 72, 243)
}
.rojo {
  color: red
}
.verde {
  color: green
}
.azul{
  color: blue
}
</style>
