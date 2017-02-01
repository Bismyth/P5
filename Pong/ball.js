function Ball() {
    this.x = width/2;
    this.y = height/2;
    this.ang = 91;
    this.show = function() {
        fill(255);
        ellipse(this.x, this.y, 15, 15);
    }
    this.move = function () {
        if (this.y < 0 || this.y > height)
            this.ang -= 90;
        if (this.ang < 0)
            this.ang += 360;
        if (this.ang <= 90 && this.ang >= 0) {
            this.x += this.ang/15;
            this.y += (this.ang - 90)/15;
        } else if (this.ang <= 180) {
            this.x -= (this.ang - 180)/15;
            this.y += (this.ang - 90)/15;
        } else if (this.ang <= 270) {
            this.x -= (this.ang - 180)/15;
            this.y -= (this.ang - 270)/15;
        } else if (this.ang <= 360) {
            this.x += (this.ang - 360)/15;
            this.y -= (this.ang - 270)/15;
        }
    }
	this.check = function (number) {
		if (number ? this.x > width : this.x < 0) {
			this.x = width/2;
			this.y = height/2;
			number = number * 180 - 50;
			this.ang = random(number - 80, number);
		} 
		return number ? this.x > width : this.x < 0;
	}
}