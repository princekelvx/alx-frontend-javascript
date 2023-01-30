/* eslint-disable */
export default function getStudentsByLocation(students, city) {
  return students.filter((param) => param.location === city); 
}