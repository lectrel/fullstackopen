const Header2 = ({ text }) => <h2>{text}</h2>;

const Part = ({ part, exercise }) => {
  return (
    <p>
      {part} {exercise}
    </p>
  );
};

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} part={part.name} exercise={part.exercises} />
      ))}
    </div>
  );
};

const Total = ({ parts }) => {
  const sum = parts.reduce((sum, { exercises }) => sum + exercises, 0);
  return <p style={{ fontWeight: "bold" }}>total of {sum} exercises</p>;
};

const Course = ({ course }) => {
  return (
    <>
      <Header2 text={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  );
};

export default Course;
