function GameObject(game,x,y,texture){
    this.game = game;        
    Phaser.Sprite.call(this,game,x,y,texture);
    game.add.existing(this);
    this.anchor.setTo(0.5,0.5); 
    game.physics.enable(this, Phaser.Physics.ARCADE);  

    this.getTile = function(){
        var map = NuhMapHandler.Map()
        return map.getTileWorldXY(this.x,this.y,16,16);
    }
}

GameObject.prototype = Object.create(Phaser.Sprite.prototype);
GameObject.prototype.constructor = GameObject;
GameObject.prototype.update = function(){
         
};
