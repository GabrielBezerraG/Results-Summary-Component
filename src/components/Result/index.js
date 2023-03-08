import { StyledResult } from "./styles";

export default function Result() {
   return (
      <StyledResult>
         <h1>Your Result</h1>
         <div className="result__circle">
            <h2>76</h2>
            <span>of 100</span>
         </div>
         <h3>Great</h3>
         <p>You scored higher than 65% of the people who have taken these tests.</p>
      </StyledResult>
   )
}