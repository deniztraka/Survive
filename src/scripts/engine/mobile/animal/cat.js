'use strict';
function Cat(game,x,y){    
    Animal.call(this,game,x,y,"cat");  
    this.speechChance = 1000;
    this.movementChance = 1000;
    this.speechText = "meaaw";

    this.animations.add('left', [3, 4,5], 10, true);
    this.animations.add('right', [6, 7, 8], 10, true);
    this.animations.add('up', [0, 1, 2], 10, true);
    this.animations.add('down', [9, 10, 11], 10, true);  

    this.point = 5;
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.update = function(){   
    Animal.prototype.update.call(this);    
     
};


