const Header = (props) => {
    return (
        <h1>{props.courseName}</h1>
    )
}

const Part = (props) => {
    return (
        <p>{props.part} {props.exercise}</p>
    )
}

const Content = (props) => {
    return (
        <div>
            {props.parts.map(part => <Part part={part.name} exercise={part.exercises} />)}
        </div>
    )
}

const Total = (props) => {
    const sum = props.parts.reduce((sum, part) => sum + part.exercises, 0)
    return (
        <p>Number of exercises {sum}</p>
    )
}

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }

    return (
        <div>
            <Header courseName={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

export default App