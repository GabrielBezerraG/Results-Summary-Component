import Result from "../src/components/Result";
import Summary from "../src/components/Summary";

export default function Home()  {
   return (
      <div className="container">
         <main>
            <Result />
            <Summary />
         </main>
      </div>
   )
}