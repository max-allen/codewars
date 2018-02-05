/*
5 Kyu
Create a Vector object that supports addition, subtaction, dot products, and norms.
var a = new Vector([1, 2, 3]);
var b = new Vector([3, 4, 5]);
var c = new Vector([5, 6, 7, 8]);

a.add(b);      // should return a new Vector([4, 6, 8])
a.subtract(b); // should return a new Vector([-2, -2, -2])
a.dot(b);      // should return 1*3 + 2*4 + 3*5 = 26
a.norm();      // should return sqrt(1^2 + 2^2 + 3^2) = sqrt(14)
a.add(c);      // throws an error
*/


class Vector {
	constructor(components) {
		this.components = components;
		this.size = components.length;
	}
	
	add(vector) {
	  if(this.size === vector.size) {
	    return new Vector(this.components.map((el, idx) => { return el + vector.components[idx] }))
	  } else {
	    throw new Error();
	  }
	}
	
  subtract(vector) {
    if(this.size === vector.size) {
	    return new Vector(this.components.map((el, idx) => { return el - vector.components[idx] }))
	  } else {
	    throw new Error();
	  }
  }
  
  dot(vector) {
    if(this.size === vector.size) {
	    let prod = this.components.map((el, idx) => { return el * vector.components[idx] })
	    return prod.reduce((a,b) => {return a + b})
	  } else {
	    throw new Error();
	  }
  }
  
  norm() {
    let squares = this.components.map((el) => {return Math.pow(el,2)})
    let total = squares.reduce((a,b) => {return a + b})
    
    return Math.pow(total, .5);
  }
  
  toString() {
    return '('+this.components.join(',')+')';
  }
  
  equals(vector) {
    for(let i = 0; i < this.components.length; i++) {
      if(this.components[i] !== vector.components[i]) return false
    }
    return true
  }
}