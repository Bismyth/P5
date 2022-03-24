function Ball() {
    this.x = width/2;
    this.y = height/2;
    this.ang = 91;
    this.show = function() {
        fill(255);
        ellipse(this.x, this.y, 15, 15);
    }
    this.move = function (speed) {
        if (this.y < 0 || this.y > height)//WIP
            if (!options.randBounce.players || (options.randBounce.players == 1 && round(random(0, 1))))
				this.ang = (180 - ((this.ang + 90) % 360 - 90 - ((this.y > height) * 180)) + ((this.y > height) * 180)) % 360;
			else
				this.ang = round(random(238, 112)) + ((this.ang < 90 && this.ang > 269) ? 180 : 0) % 360;
        this.ang %= 360;
        if (this.ang <= 90 && this.ang >= 0) {
            this.x += this.ang/15 * speed;
            this.y += (this.ang - 90)/15 * speed;
        } else if (this.ang <= 180) {
            this.x -= (this.ang - 180)/15 * speed;
            this.y += (this.ang - 90)/15 * speed;
        } else if (this.ang <= 270) {
            this.x -= (this.ang - 180)/15 * speed;
            this.y -= (this.ang - 270)/15 * speed;
        } else if (this.ang <= 360) {
            this.x += (this.ang - 360)/15 * speed;
            this.y -= (this.ang - 270)/15 * speed;
        }
    }
	this.check = function (number) {
		if (number - 1 ? this.x > width : this.x < 0) {
			this.x = width/2;
			this.y = height/2;
			number = number * 180 - 50;
			this.ang = random(number - 80, number);
			number = (number + 50)/180;
		} 
		return number - 1 ? this.x > width : this.x < 0;
	}
}