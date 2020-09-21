self.importScripts('math.js'); 

self.onmessage = function(event) {
    if(event.data === "ejecutarAlgoritmo"){
        self.ejecutarAlgoritmo()
    }
}

self.ejecutarAlgoritmo = function(){
  const test = math.matrix([0,1,2]);

  //const math = create(all, config)

    self.postMessage({data: "hiloVivo", value: true});
    for(var i = 0; i< 5000; i++){
        self.postMessage({data: "progreso", value: (i*100.0)/5000.0});
        for(var j = 0; j < 5000; j++){
          
          for(var k = 0; k < 400; k++){
          }
        }
      }

    self.postMessage({data: "hiloVivo", value: false});
    self.postMessage({data: "test", value: test.toString()});
    self.postMessage({data: "resultado", value: [0,0,0,1,1,1]});

}