export function Card({img, name, age, course }: { img?: string; name: string; age: number; course: string }) {
  return (
    <div className="card border border-gray-200 w-auto">
      <img src={img || "https://dicebear.com/10.x/identicon/svg?seed={name}"} alt="Student" className="card-image" />
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
      <p>Course: {course}</p>
    </div>
  );
}

export default Card;
