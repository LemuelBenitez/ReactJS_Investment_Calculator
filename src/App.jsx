import { useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import Table from "./components/Table";


function App() {
    const[initialInvestment, setInitialInvestment] = useState(0);
    const[annualInvestment, setAnnualInvestment] = useState(0);
    const[expectedReturn, setExpectedReturn] = useState(0)
    const[duration,setDuration]= useState(0);
    console.log(initialInvestment , "hh")

  return (
    <>
   <Header />
   <Input
  initialInvestment ={setInitialInvestment}
  annualInvestment ={setAnnualInvestment}
  expectedReturn ={setExpectedReturn}
  duration = {setDuration}
    />
   <Table 
        initialInvestment ={initialInvestment}
        annualInvestment = {annualInvestment}
        expectedReturn ={expectedReturn}
        duration = {duration}
   />
   </>
  )
}

export default App
