class MyStack {
    constructor() {
      this.q1 = []; 
      this.q2 = []; 
    }
  
    
    push(x) {
     
      this.q2.push(x);
      // Move all elements from q1 to q2
      while (this.q1.length > 0) {
        this.q2.push(this.q1.shift());
      }
     
      [this.q1, this.q2] = [this.q2, this.q1];
    }
  
    
    pop() {
      return this.q1.shift();
    }
  
    
    top() {
      return this.q1[0];
    }
  
    
    empty() {
      return this.q1.length === 0;
    }
  }
  