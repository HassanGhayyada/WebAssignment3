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
