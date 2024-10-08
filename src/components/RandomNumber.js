import { useState } from "react"
import './randomNumber.css'
function RandomNumber() {

  var [rnumber, setrNumber] = useState(0)
  function change() {
    var number = Math.floor(Math.random() * 100)
    setrNumber(number)
  }

  return (
    <div>
      <h1>Random Number Generation</h1>
      <button onClick={change}>Generate</button>
      <span><h1>Random Number is: </h1></span>
      <h1 className="num">{rnumber}</h1>
    </div>
  )
}

export default RandomNumber