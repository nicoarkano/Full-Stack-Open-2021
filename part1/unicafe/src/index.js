import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Statistics from './components/Statistics'
import Button from './components/Button.jsx'
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback </h1>
      <Button handleClick = {() => setGood(good + 1)} text = "Good"/>
      <Button handleClick = {() => setNeutral(neutral + 1)} text ="Neutral" />
      <Button handleClick = {() => setBad(bad + 1) } text ="bad" />
      <Statistics good = {good} neutral = {neutral} bad = {bad} /> 
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
