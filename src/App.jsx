import { useState } from "react"
import { FormAddMoney } from "./Components/FormAddMoney"
import { Header } from "./Components/Hedear"
import './index.css'
import MainControl from "./Components/MainControl"

function App() {
  const [count, setCount] = useState(0)
  const [isValid, setIsValid] = useState(false)

  const component = isValid 
              ? <MainControl count={count} />
              :  <FormAddMoney setCount={setCount} setIsValid={setIsValid} />




  return (
    
    <div className="App">
      
    <Header/>
    { component }
    </div >
  
    
  )
}

export default App
