let sketch = function(p) {
  p.setup = function(){
    p.createCanvas(100, 100);
    p.background(0);
  }
};

let node = document.createElement('div');
window.document.getElementsByTagName('body')[0].appendChild(node);
new p5(sketch, node);
node.id = "Hello";