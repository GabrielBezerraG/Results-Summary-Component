import { StyledSummary } from "./styles";
import data from "../../../data.json";
import Article from "../Article";

export default function Summary() {
   return (
      <StyledSummary>
         <h3>Summary</h3>
         <section>
            {data.map( item => {
               return (
                  <Article key={item.category} data={item} />
               )
            })}
         </section>
         <button>Continue</button>
      </StyledSummary>
   )
}