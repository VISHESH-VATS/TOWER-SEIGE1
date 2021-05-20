class band {

    constructor(bodyA, pointB) {

        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness: 0.2,
            length: 10
        }

        this.pointB = pointB;
        this.band = Constraint.create(options);
        World.add(world, this.band);

    }

    fly() {
        this.band.bodyA = null;
    }

    attach(body) {
        this.band.bodyA = body;
    }

    display() {

        if(this.band.bodyA) {

            var pointA = this.band.bodyA.position;
            var pointB = this.pointB;

            push();
            stroke("maroon");
            strokeWeight(5);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            pop();

        }

    }
    
}