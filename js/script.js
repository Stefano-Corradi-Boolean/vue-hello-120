// prendo il metodo createApp dall'oggetto Vue
const { createApp } = Vue;


// dentro CreateApp ci saraà TUTTO il codice JS per Vue (dati, funzioni, eventi....)
createApp({

  // i dati vengono gestiti dal metodo data()
  // data è in metodo che restituisce un oggetto
  // questo oggetto conterrà tutte le nostre "variabili" che in realtà sono proprità dell'oggetto data
  data(){
    return {
      messaggio: 'ciao',
      altroMessaggio: 'Buongiorno',
      nome:'Ugo',
      cognome:'De Ughi',
      testo: '  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad blanditiis qui deserunt earum laborum. Soluta, nobis molestiae. Distinctio repudiandae rerum, eius nesciunt obcaecati omnis fuga amet cupiditate similique eaque ducimus!',
      testoHtml:'<p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad blanditiis qui deserunt earum laborum. Soluta, nobis molestiae. Distinctio repudiandae rerum, eius nesciunt obcaecati omnis fuga amet cupiditate similique eaque ducimus!</p>',
      miaClasseCss: 'verde',
      altraClasseCss: 'sottolineato',
      link: 'https://www.google.com/',
      contatore: 0,
      displayClock:'00:00:00',
      isGrassetto: false

    }
  },

  methods:{
    saluto(){
      console.log('ciao');
    },
    altroSaluto(salutoStr){
      this.messaggio = `${salutoStr} ${this.nome} come stai?`
    },
    incrementaContatore(){
      // per accedere ai data dai methods devo usare la parola chiave this
      this.contatore++;
      console.log('increomento contatore', this.contatore);

    },
    printClock(){
      const d =  new Date();
      const h = d.getHours() < 10 ? '0'+d.getHours() : d.getHours();
      const m = d.getMinutes() < 10 ? '0'+d.getMinutes() : d.getMinutes();
      const s = d.getSeconds() < 10 ? '0'+d.getSeconds() : d.getSeconds();
      this.displayClock = `${h}:${m}:${s}`
    },
    startClock(){
      // se con una timing function dobbiamo fare riferimento ai data la funzione di callbak deve essere un'arrow function per la corretta gestione del this
      setInterval(() => {
        this.printClock()
      //  console.log(this);
      }, 1000)
    }
  },

  // monted() viene invocato quando l'app è ontata e la reattività è pronta
  mounted(){
    console.log('APP MONTANTA');
    this.printClock();
    this.startClock();
  } ,
  created(){
    console.log('APP CREATA')

  }

}).mount('#app') // innesto (monto) Vue dentro #app