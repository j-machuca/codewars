class Game{
    constructor(name,level){
        this.player = new Player(name);
        this.level = typeof level === "string" || typeof level === "number" ? parseInt(level) : 0 ;
        this.floors = []
    }

}

class Player{
    constructor(name="Player"){
        this.name = typeof name !== "string" || name === "" ? "Player" : name;
        this.health = 100.00
        this.position = {x:0,y:0}
        this.damage = 10.00
        this.luck = 1.00
    }
}

class Monster {
    constructor(level){
        this.level = level;
    }
}

class Map {
    constructor(level){
        this.level = level;
    }
}