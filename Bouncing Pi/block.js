function Block(x,w,v,m) {
    this.x = x;
    this.y = height - w - fr;
    this.w = w;
    this.v = v;
    this.m = m;
    this.show = function () {
        fill(255);
        stroke(255);
        rect(this.x,this.y,this.w,this.w);
    }
    this.update = function() {
        this.x += this.v;
        if (this.x <= 10){
            this.v *= -1;
            coll ++;
        }   
    }
    this.collide = function(other) {
        if(other.x < this.x + this.w){
            var lv1 = this.v;
            var lv2 = other.v;
            var comb = this.m+other.m;
            this.v = (this.m-other.m)/comb*lv1 + (2*other.m)/comb*lv2;
            other.v = (2*this.m)/comb*lv1 + (other.m-this.m)/comb*lv2;
            coll++;
        }
    }
}