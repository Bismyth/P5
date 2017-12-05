function Player(){
	this.c = 300;
	this.y = 300;
	this.dir=0;
	this.jump = false;
	this.jumper = 0;
	this.show = function(){
		this.x = this.c - offset;
		//Testing Collisions
		this.touchy = cells[floor(this.x/w)][floor(this.y/w)+1].ground || cells[floor((this.x+(w-1))/w)][floor(this.y/w)+1].ground;
		this.touchxr = cells[floor(this.x/w)+1][floor(this.y/w)].ground || cells[floor(this.x/w)+1][floor((this.y+(w-1))/w)].ground;
		this.touchxl = cells[floor((this.x-1)/w)][floor(this.y/w)].ground || cells[floor((this.x-1)/w)][floor((this.y+(w-1))/w)].ground;
		//Applying Gravity
		if (!this.touchy && this.jumper == 0) { this.y += grav; }
		//Camera Movement
		if (this.dir == 1 && this.c + mvspd * this.dir > 20 * w && !this.touchxr && (this.x/w)+10 < render.length) { offset -= mvspd * this.dir; } 
		else if ((this.dir == -1) && (this.c + mvspd * this.dir < 10 * w) && (!this.touchxl) && ((this.x/w)-10 > 0)) { offset -= mvspd * this.dir; } 
		//Movement
		else {
			if(this.dir == 1 && !this.touchxr){ this.c += mvspd * this.dir; }
			if(this.dir == -1 && !this.touchxl){ this.c += mvspd * this.dir; }
		}
		//Jumping
		if(this.jump && this.touchy){
			this.jumper = 10;
			this.jump = false
		} else {
			this.jump = false;
		}
		if (this.jumper > 0){
			this.y -= 15;
			this.jumper --;
		}
		//Drawing of the sprite
		fill(255,0,0);
		rect(this.c,this.y,w,w);	
	}	
}
