import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Display from './components/Display'
import Button from './components/Button'
const App = () => {
   const [ counter, setCounter ] = useState(0)
   const increaseByOne =()=> setCounter(counter + 1)
   const setToZero =()=> setCounter(0)
   const decreaseByOne = () => setCounter(counter - 1)

  return (
    <div>

   <Display counter = {counter}/>
   <Button 
	  handleClick={increaseByOne}
	  text='plus'
	  />
   <Button
	  handleClick={setToZero}
	  text='zero'
	  />

   <Button
	  handleClick = {decreaseByOne}
	  text='minus'
	  />


   </div>

  )
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)
