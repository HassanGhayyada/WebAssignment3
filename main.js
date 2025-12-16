"use strict";

import { Student } from "./models.js";
import { fetchStudents } from "./database.js";
import {
  calculateClassAverage,
  findTopStudent,
  filterStudents
} from "./analytics.js";

console.log("importing data from the database");
fetchStudents((rawData) => {
  console.log("Data received\n");

  const students = rawData.map(
    s => new Student(s.id, s.name, s.courses)
  );
});
console.log("Testing Immutability:");
  console.log(`Original ID: ${students[0].id}`);
  console.log("Attempting to change ID to 999...");
  try {
    students[0].id = 999;
  } catch {}
  console.log(`Final ID: ${students[0].id} (Success: ID did not change)\n`);

  console.log("--- Analytics Report ---");

  const avg101 = calculateClassAverage(students, 101);
  console.log(`Class Average for Course 101: ${avg101.toFixed(2)}`);

  const topStudent = findTopStudent(students);
  console.log(
    `Top Student: ${topStudent.name} (Average: ${topStudent
      .getAverage()
      .toFixed(1)})`
  );

  const studentsIn102 = filterStudents(
    students,
    s => s.courses.some(c => c.courseId === 102)
  );

  console.log(
    `Students in Course 102: ${studentsIn102.map(s => s.name).join(", ")}`
  );

