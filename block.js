class block 
{
    constructor(x, y, width, height) 
    {
        var options =
        {
            restitution: 0.5
        };
        this.visiblity = 255;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display() 
    {
        var pos = this.body.position;
        var angle = this.body.angle;
        

        if(this.body.speed<3)
        {
            push();

            translate(pos.x, pos.y);
            rotate(angle);
            rectMode(CENTER);
            fill("white");
            strokeWeight(5);
            stroke("green");
            rect(0, 0, this.width, this.height);

            pop();
        }
        else
        {
            World.remove(world,this.body);
            push();
            this.visiblity = this.visiblity-5;
            tint(255,this.visiblity);
            rectMode(CENTER);
            fill("white");
            strokeWeight(5);
            stroke("green");
            rect(0, 0, this.width, this.height);
            pop();
        }
    
    }

    score()
        {
            if(this.visiblity<0&&this.visiblity>-200)
            {
                score = score + 1;
            }
        }
}
