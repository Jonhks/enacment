<template>
  <div id="app">
    <div>
      <label for="numbers">Ingresa tu numero: </label>
      <input type="number" v-model="limit" id="numbers">
        <div>
          <button @click="evaluated" @keypress.enter="evaluated" >Calcular</button>
        </div>
      <div v-for="number in arrNum" :key="number" >
        <p :class="number.clase">{{ number.index }}</p>
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
        if(i % 3 == 0 ){
        let clase = 'verde'
         i % 3 == 0 && i % 7 == 0 ? this.arrNum.push({'index': `${i} (3, 7)*` , 'number': i, 'clase': clase }) : null
         i % 3 == 0 && i % 5 == 0 ? this.arrNum.push({'index': `${i} (3, 5) *` , 'number': i, 'clase': clase }) : null
         this.arrNum.push({'index': i, 'number': i, 'clase': clase })
        } else if (i % 5 == 0){
          let clase = 'rojo'
          i % 5 == 0 && i % 7 == 0 ? this.arrNum.push({'index': `${i} (5, 7) *` , 'number': i, 'clase': clase }) : this.arrNum.push({'index': i, 'number': i, 'clase': clase })
        } else if (i % 7 == 0 ) {
          let clase = 'morado'
          this.arrNum.push({'index': i, 'number': i, 'clase': clase })
        }
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
