import { useState } from 'react'

const Header = (props) => (
    <h1>{props.name}</h1>
)

const Button = ({handleClick, text}) => (
  <button onClick = {handleClick}>
    {text}
  </button>
)

const Statistic = ({name, value}) => {
  return(
    <tr>
      <td>{name}</td> 
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({clicks}) => {
  const total = clicks.good + clicks.bad + clicks.neutral
  const average = (clicks.good * 1 + clicks.bad * -1) / total
  const positive = clicks.good / total * 100

  if( total === 0) {
    return(<div>No feedback given</div>)
  }

  return(
    <div>
      <Statistic name = "good" value = {clicks.good}/>
      <Statistic name = "neutral" value = {clicks.neutral}/>
      <Statistic name = "bad" value = {clicks.bad}/>
      <Statistic name = "total" value = {total}/>
      <Statistic name = "average" value = {average}/>
      <Statistic name = "positive" value = {positive}/>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [clicks, setClicks] = useState({
    good: 0, neutral: 0, bad: 0
  })

  const handleGoodClick = () => setClicks({...clicks, good: clicks.good + 1})

  const handleNeutralClick = () => setClicks({...clicks, neutral: clicks.neutral + 1})

  const handleBadClick = () => setClicks({...clicks, bad: clicks.bad + 1})

  return (
    <div>
      <Header name = "give feedback"/>
      <Button handleClick={handleGoodClick} text = "good"/>
      <Button handleClick={handleNeutralClick} text = "neutral"/>
      <Button handleClick={handleBadClick} text = "bad"/>
      <Header name = "statistics"/>
      <Statistics clicks = {clicks}/>


    </div>
  )
}

export default App