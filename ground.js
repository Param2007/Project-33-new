class Ground {

    constructor(x,y,width,height) {

        var options = {
            isStatic: true
        }

        this.width = width;
        this.height = height;

        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world, this.body);
    }

    display() {

        var p = this.body.position;

        fill("white");
        rectMode(CENTER);
        rect(p.x, p.y, this.width, this.height);
    }

}