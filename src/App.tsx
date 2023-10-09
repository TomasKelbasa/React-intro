import './App.css'
import Greetings from "./components/Greetings"
import Container from "./components/Container"
import Counter from './components/Counter'
import { useState } from 'react'

const App = () => {
  const [a, setA] = useState<number>(0);
  const [b, setB] = useState<number>(0);
  return(
    <>
    <Greetings text="Kdy to skončí" />
    <Counter value={a} setVal={setA} steps={50} />
    <Counter value={b} setVal={setB} steps={50} />
    <p>Celkem {a+b}</p>
    </>
  );
  
}

export default App
