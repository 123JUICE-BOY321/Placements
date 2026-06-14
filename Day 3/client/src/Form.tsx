import axios from "axios";

export function Form({ onAddStudent }: any) {
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const form = e.target;
        await axios.post("http://localhost:5000/student", {
            name: form.name.value,
            age: Number(form.age.value),
            course: form.course.value,
        });
        onAddStudent({
            name: form.name.value,
            age: Number(form.age.value),
            course: form.course.value,
        });
        form.reset();
    };

  return (
    <form onSubmit={handleSubmit} className="border border-black mx-auto w-1/2">
      <label>Name: </label>
      <input className="border border-black mb-1" type="text" name="name" required /> <br />
      <label>Age: </label>
      <input className="border border-black mb-1" type="number" name="age" required /> <br />
      <label>Course: </label>
      <input className="border border-black mb-1" type="text" name="course" required /> <br />
      <button className="bg-blue-500 p-2" type="submit"> Add Student </button>
    </form>
  );
}

export default Form;