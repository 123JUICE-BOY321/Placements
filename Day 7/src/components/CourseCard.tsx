type CourseCardProps = {
  title: string;
  students: number;
};

function CourseCard({ title, students }: CourseCardProps) {
  return (
    <div className="course-card">
      <h3>{title}</h3>
      <p>Students: {students}</p>
      <button>View Course</button>
    </div>
  );
}

export default CourseCard;
