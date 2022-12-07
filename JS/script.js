//crear el archivo de configuración
const config = {
    width: 400*2,
    height:200*2,
    pixelArt: true,
    parent: "container",
    type: Phaser.AUTO,
    scene: {
        //crear las funciones
        preload: preload,
        create: create,
        update: update
    },
    physics: {
        default: "arcade",
        arcade: {
            gravity: {
                x:10,
                y:500000000000
            }
        }
    }
}
var game= new Phaser.Game(config);

function preload(){
    this.load.image("auto","./sprites/auto.png");
    this.load.image("noche","./sprites/noche.png");
    this.load.image("auto2","./sprites/auto2.png");
    this.load.image("auto3","./sprites/auto3.png");
    this.load.image("girl","./sprites/girl.png");
    this.load.image("meta","./sprites/meta.png");
    


}

function create(){
    this.add.image(400, 200, 'noche');
    
    //cargamos imagenes
    this.auto = this.physics.add.image(100,91,"auto");
    this.auto2 = this.physics.add.image(100,91,"auto2");
    this.auto3= this.physics.add.image(100,91,"auto3");
    this.girl= this.physics.add.image(100,100,"girl");
    this.meta= this.physics.add.image(100,100,"meta");
    //auto1
    this.auto.setScale(0.8);
    this.auto.setCollideWorldBounds(true);
    this.auto.setBounce(0.9);
    this.auto.setVelocity(100);
    //auto2
    this.auto2.setScale(0.8);
    this.auto2.setCollideWorldBounds(true);
    this.auto2.setBounce(0.9);
    this.auto2.setVelocity(80);
    //auto3
    this.auto3.setScale(0.9);
    this.auto3.setCollideWorldBounds(true);
    this.auto3.setBounce(0.9);
    this.auto3.setVelocity(90);
    //girl
    this.girl.setScale(0.2);
    this.girl.setCollideWorldBounds(true);
    this.girl.setBounce(-1000000);
    this.girl.setVelocity(-1000000);
    //meta
    this.meta.setScale(0.4);
    this.meta.setCollideWorldBounds(true);
    this.meta.setBounce(-1000);
    this.meta.setVelocity(1000000);


}
function update(){
}

