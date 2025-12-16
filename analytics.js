export function calculateClassAverage(students, courseId) {
  const grades = students
    .map(s => s.courses.find(c => c.courseId === courseId))
    .filter(Boolean)
    .map(r => r.grade);

  if (grades.length === 0) return 0;

  const sum = grades.reduce((a, b) => a + b, 0);
  return sum / grades.length;
}
export function findTopStudent(students) {
  if (students.length === 0) return null;

  return students.reduce((best, current) =>
    current.getAverage() > best.getAverage() ? current : best
  );
}

export function filterStudents(students, criteriaFn) {
  return students.filter(criteriaFn);
}
