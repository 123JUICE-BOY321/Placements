function Courses() {
  const courseList = [
    "React JS",
    "Java Programming",
    "Node JS",
    "MongoDB",
    "MERN Stack",
    "Spring Boot",
  ];

  return (
    <section className="courses-page">
      <h2>Our Courses</h2>
      <ul>
        {courseList.map((course, index) => (
          <li key={index}>📘 {course}</li>
        ))}
      </ul>
    </section>
  );
}

export default Courses;
