function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}
let student1 = new Student();
let student2 = new Student();

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
if(this.marks === undefined){ 
  this.marks.push(mark[0]); 
  } else {
   this.mark.splice(1)(0);
  }
}

Student.prototype.addMarks = function (...marks) {
if(this.marks === undefined){ 
  this.marks.push(marks[0]); 
  } else {
  this.marks.splice(1)(0);
  }

  Student.prototype.getAverage = function () {
    return +(this.marks.reduce((acc, item) => acc + item)/this.marks.length);
  }

  Student.prototype.exclude = function(reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
  }