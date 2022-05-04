
const app = new Vue({

  el: '#app',

  data: {

    todoList : [
      {
        text: 'Fare la spesa',
        done: false
      },
      {
        text: 'Ripassare argomenti vecchi',
        done: false
      },
      {
        text: 'Controllare ultimo esercizio consegnato',
        done: false
      },
      {
        text: 'Preparare la cena',
        done: false
      }
    ],

    newItems : '',
    checkDelate : false,
    indexToDelate : 0,
  },

  methods:{

    delateItems(index){

      this.checkDelate = true;
      this.indexToDelate = index;
    },

    doubleCheck(){
      
      this.todoList.splice(this.indexToDelate, 1);
      this.checkDelate = false;
    },

    getNewItems(){
      const pushableTodo = {
        text: '',
        done: false
      }
      pushableTodo.text = this.newItems;

      if(this.newItems.length > 2){
        this.todoList.push(pushableTodo);
        this.newItems ='';
      }  
    },


  }

})