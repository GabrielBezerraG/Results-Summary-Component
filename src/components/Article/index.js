import { StyledArticle } from "./styles";

export default function Article( {data} ) {
   const rgbArray = data.color.match(/\d{1,3}/g);
   const rgbaStr = [...rgbArray, '0.06'].join(', ');
   const backgroundColor = `rgba(${rgbaStr})`
   return (
      <StyledArticle color={data.color} icon={data.icon} backgroundColor={backgroundColor}>
         <h4>
            <i />
            {data.category}
         </h4>
         <h5>
            <span className="score"> {data.score} </span>
            <span className="hundred"> / 100</span>
         </h5>
      </StyledArticle>
   )
}