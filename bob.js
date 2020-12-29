class Bob {
	constructor(x,y,r)
	{var options={
			isStatic:false,
			restitution:0.5,
			friction:0.5,
			density:2.5
    }
		this.x=x;
		this.y=y;
		this.r=r;
		this.body=Bodies.circle(this.x, this.y, (this.r)/1.5, options);
		World.add(world, this.body);
    }
	display(){
			
			var bobpos=this.body.position;		

			push()
			translate(bobpos.x, bobpos.y);
			ellipseMode(CENTER);
			strokeWeight(2);
			stroke(0);
			fill("purple");
			ellipse(this.r,this.r);
			pop()
    }
}