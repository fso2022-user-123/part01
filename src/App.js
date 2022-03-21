
const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Part = (props) => {
  const { name, exercises } = props
  return (
    <>
      <p>
        {name} {exercises}
      </p>
    </>
  )
}

const Content = (props) => {
  const [part1, part2, part3] = props.parts
  return (
    <div>
      <Part name={part1.name} exercises={part1.exercises}/>
      <Part name={part2.name} exercises={part2.exercises}/>
      <Part name={part3.name} exercises={part3.exercises}/>
    </div>
    
  )
}

const Total = (props) => {
  const exercises = props.exercises
  const totalExercises = exercises.reduce((a,b) => a + b, 0)
  return (
    <>
      <p>Number of exercises {totalExercises}</p>
    </>
    
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const parts = [
    { name: part1, exercises: exercises1 },
    { name: part2, exercises: exercises2 },
    { name: part3, exercises: exercises3 },
  ]
  const exercises = parts.map(part => part.exercises)
  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total exercises={exercises} />
    </div>
  )
}

export default App