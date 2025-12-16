export class Student {
  constructor(id, name, courses = []) {
    this.name = name;
    this.courses = courses;
  }
}
