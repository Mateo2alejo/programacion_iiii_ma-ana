class Car {
    constructor(brand, model){
        this.brand = brand;
        this.model = model;
    }

    start(){
        console.log('${this.brand} ${this.model}esta encendido ')
    }
    run(){
        console.log('${this.brand} ${this.model} esta corriendo')
    }
    stop(){
        console.log('${this.brand} ${this.model} esta corriendo ')
    }
}

const miCarro =new Car('Toyata', 'Corolla');
miCarro.start();
miCarro.run();
miCarro.stop();