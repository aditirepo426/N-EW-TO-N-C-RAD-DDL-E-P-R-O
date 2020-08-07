class Bob {
    constructor(x,y,radius){
        var options = {
            isStatic: true
        }
    
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius
        World.add(world,this.body);
        
} 
display(){


    
        push();
        rectMode(CENTER);
       // translate(this.body.position.x,this.body.position.y);
        stroke("red");
        fill(250, 255, 0);
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
        pop();
    
    }   
}