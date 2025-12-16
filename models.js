export class Student {
  constructor(id, name, courses = []) {
    Object.defineProperty(this, "id", {
    value: id,
    writable: false,
    configurable: false,
    enumerable: true
   });

    this.name = name;
    this.courses = courses;
  }
  addCourse(courseId, grade) {
    this.courses.push({ courseId, grade });
  }

  getAverage() {
    if (this.courses.length === 0) return 0;
    return this.courses.reduce((acc, c) => acc + c.grade, 0) / this.courses.length;
  }

}
