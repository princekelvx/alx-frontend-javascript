export default function getListStudents() {
  return students.reduce((acc, c) => acc + c.id, 0);
}