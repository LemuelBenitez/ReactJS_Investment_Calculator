import { calculateInvestmentResults } from "../util/investment"
export default function Table(
    {
        initialInvestment,
        annualInvestment,
        expectedReturn,
        duration
   }
){

    let l = calculateInvestmentResults(
        initialInvestment,
        annualInvestment,
        expectedReturn,
        duration
             );
    return(
        <table id="result">
         <thead>
           <th>Year</th>
           <th>Investment Value</th>
           <th>Intrest(Year)</th>
           <th>Total Intrest</th>
           <th>Invested Capital</th>
         </thead>

         <tbody>
       { l.map((e) =>
    
            <tr key={e.year}>
           <td>{e.year}</td>
           <td>{initialInvestment}</td>
           <td>{e.interest}</td>
           <td>{e.valueEndOfYear}</td>
           <td>{e.annualInvestment}</td>
           </tr>
       )
       }
       </tbody>
        </table>
    )
}