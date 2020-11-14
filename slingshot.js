class slingshot
{
    constructor(BodyA,pointB)
    {
        var options = 
        {
            bodyA : BodyA,
            pointB : pointB,

            stiffness : 0.1,
            length : 20        
        }

        this.Sling = Constraint.create(options);
        World.add(world,this.Sling);
    }

    launch()
    {
        this.Sling.bodyA = null;
    }

    attach(body)
    {
        this.Sling.bodyA = body;
    }

    display()
    {
        if(this.Sling.bodyA)
        {
        var pointA = this.Sling.bodyA.position;
        var pointB = this.Sling.pointB;
    
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
}