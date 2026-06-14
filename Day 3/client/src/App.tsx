import { useState } from "react";
import { Card } from "./Card";
import { Form } from "./Form";

export function App() {
  const [students, setStudents] = useState([
    { name: "Alice", age: 20, course: "Computer Science" },
    { name: "Bob", age: 22, course: "Mathematics" },
    { name: "Charlie", age: 21, course: "Physics" },
  ]);
  return (
    <div>
      <Form onAddStudent={(student: any) => setStudents([...students, student])}/>
      <h1>Student Cards</h1>
      <div className="card-container">
        {students.map((student, i) => (<Card key={i} {...student} />))}
      </div>
    </div>
  );
}

export default App;
