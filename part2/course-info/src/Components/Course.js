const Header = props => {
    return (
        <h1>{props.name}</h1>
    )
}

const Content = ({parts}) =>{
    return (
        <div>
            {parts.map( part => 
                <Part key = {part.id} name = {part.name} exercises = {part.exercises} ></Part>
            )}
        </div>
    )
}

const Part = (props) => {
    return (
        <p>{props.name} {props.exercises}</p>
    )
}

const Total = ({parts}) => {
    return (
        <p>Number of exercises {parts.reduce((sum, part) => sum + part.exercises, 0 )}</p>
    )
}


const Course = ({course}) => {
    return (
        <div>
            <Header name={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

export default Course