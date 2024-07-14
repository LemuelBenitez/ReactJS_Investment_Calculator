export default function Input({
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration,
  }){
 const iI = (event) => {
    initialInvestment(Math.round(parseInt(event.target.value),2))
 }

 const aI = (event) =>{
    annualInvestment(Math.round(parseInt(event.target.value),2))
 }

 const eR = (event) =>{
    expectedReturn(Math.round(parseInt(event.target.value),2))
 }

 const d = (event) =>{
    duration(Math.round(parseInt(event.target.value),2))
 }
    return(
           <table id="user-input">
           <tbody>
           <tr>
            <th>Initial Investment</th>
            <th>Annual Amount</th>
           </tr>
           <tr>
           <td><input type="number" required onChange={(e)=> iI(e)}/></td>
           <td><input type="number" required onChange={(e)=>aI(e)}/></td>
           </tr>

           <tr>
            <th>Expected Return</th>
            <th>Duration</th>
           </tr>
           <tr>
           <td><input type="number" required defaultValue='0' onChange={(e)=>eR(e)}/></td>
           <td><input type="number" required defaultValue='0' onChange={(e)=>d(e)}/></td>
           </tr>
           </tbody>
           </table>
    )
}