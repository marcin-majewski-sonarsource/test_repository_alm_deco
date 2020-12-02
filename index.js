console.log('anything');

if (!"prop1" in myObj) {  // Noncompliant;  "in" operator is checking property "false"
  doTheThing();  // this block will be never executed
}

if (!foo instanceof MyClass) {  // Noncompliant; "!foo" returns a boolean, which is not an instance of anything
  doTheOtherThing();  // this block is never executed
}


var myarray = [80, 3, 9, 34, 23, 5, 1];

myarray.sort();
console.log(myarray); // outputs: [1, 23, 3, 34, 5, 80, 9]


class A {
  private _x: number = 0;
  private y: number = 0;

  public get x() {  // Noncompliant: field 'x' is not used in the return value
    return this.y;
  }

  public setX(val: number) { // Noncompliant: field 'x' is not updated
    this.y = val;
  }

  public getY() { // Noncompliant: field 'y' is not used in the return value
    return this.x;
  }
}

