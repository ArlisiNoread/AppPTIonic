import { create, all, to } from 'mathjs'
import { Redirect } from 'react-router';
//import { Push, PushObject, PushOptions } from '@ionic-native/push/ngx';



const math = create(all, {});

/*
const options: PushOptions = {
  android: {},
  ios: {
      alert: 'true',
      badge: true,
      sound: 'false'
  },
  windows: {},
}

const push: Push = new Push();
const pushObject: PushObject = push.init(options);
*/

export default class Algoritmo {
  private hiloVivo = false;
  private progreso = 0.0;
  private tiempoEstimado = "";
  private setHiloVivoState = function(v:any){/*Función Temporal*/};
  private setProgresoState = function(v:any){/*Función Temporal*/};
  private myWorker = new Worker('codigoAlgoritmo.js');
  private setResultado = function(v:any){/*Función Temporal*/};
  /*private push = Push;*/

  constructor(){
    this.myWorker.onmessage = ({data}) => {
      var tipoDato = data.data;
      var valorDato = data.value;

      if(tipoDato === "progreso"){
        this.setProgresoConModal(valorDato);
      }else if(tipoDato === "hiloVivo"){
        this.setHiloVivoConModal(valorDato);
      }else if(tipoDato === "resultado"){
        this.setResultado(valorDato);
        window.location.href = "/resultado";
      }
      else{
        console.log("Tipo: " + tipoDato + ", Valor: " + valorDato);
      }
    }

  }


  iniciarAlgoritmo() {
    this.myWorker.postMessage("ejecutarAlgoritmo");
  }

  getHiloVivo(){
    return this.hiloVivo;
  }

  getTiempoEstimado(){
    return this.tiempoEstimado;
  }

  getProgreso(){
    return this.progreso;
  }

  asociarSetHiloVivoModal(setHiloVivo: any){
    this.setHiloVivoState = setHiloVivo;
  }

  setHiloVivoConModal(valor: boolean){
    this.hiloVivo = valor;
    this.setHiloVivoState(this.hiloVivo);
  }

  asociarSetProgresoModal(setProgreso: any){
    this.setProgresoState = setProgreso;
  }

  setProgresoConModal(valor: number){
    if(Math.floor(valor) != Math.floor(this.progreso) ){
      this.progreso = valor;
      this.setProgresoState(valor);
    }    
  }

  asociarResultadoConApp(setResultado: any){
    this.setResultado = setResultado;
  }

}
