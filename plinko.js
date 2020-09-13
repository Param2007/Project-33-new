class Plinko {

    constructor(x, y, radius) {

        var options = {
            isStatic: true
        }

        this.radius = radius;

        this.body = Bodies.circle(x, y, radius, options);
        World.add(world, this.body);

    }

    display() {

        var p = this.body.position;
        var angle = this.body.angle;

        rotate(angle);

        ellipseMode(RADIUS);
        ellipse(p.x, p.y, this.radius, this.radius);
    }
}