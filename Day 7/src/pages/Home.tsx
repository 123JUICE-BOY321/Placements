import { useState, useEffect } from "react";
import Hero from "../components/Hero";
import CourseCard from "../components/CourseCard";

function Home() {
  const [search, setSearch] = useState("");
  const [courses, setCourses] = useState(
    [] as { title: string; students: number }[]
  );

  useEffect(() => {
    setCourses([
      { title: "React JS", students: 1000 },
      { title: "Java Programming", students: 800 },
      { title: "MERN Stack", students: 900 },
    ]);
  }, []);

  return (
    <section className="home-page">
      <Hero />
      <div className="search-area">
        <input
          placeholder="Search courses..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="course-grid">
        {courses
          .filter((c) => c.title.toLowerCase().includes(search.toLowerCase()))
          .map((course) => (
            <CourseCard
              key={course.title}
              title={course.title}
              students={course.students}
            />
          ))}
      </div>
    </section>
  );
}

export default Home;
