class Box {

    constructor(x, y, width, height) {
        var options = {

            restitution: 0.5,
            frictions: 0.01,
            
        }

        this.body = Bodies.rectangle(x, y, width, height, options);

        //NameSpacing(renaming width and height)
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    display() {
     //NameSpacing(renaming position of Ground)
        var pos = this.body.position;
        var angle = this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        strokeWeight(2);
        rect(0,0, this.width, this.height);
        pop()
    }
}