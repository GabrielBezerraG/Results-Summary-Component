import styled from "styled-components";

export const StyledArticle = styled.article`

   background-color: ${(props) => props.backgroundColor};
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 1rem 0.9rem;
   border-radius: 10px;
   font-size: 0.9rem;

   h4 {
      display: flex;
      align-items: center;
      column-gap: 0.65rem;
      color: ${(props) => props.color};
      filter: contrast(0.75);

      i {
      background: url(${(props) => props.icon}) center / contain no-repeat;
      width: 20px;
      height: 20px;
      display: inline-block;
      }
   }

   h5 {
      font-weight: 700;
   }

   .score {
         color: var(--dark-blue);
         margin-right: 0.2rem;
   }

   .hundred {
      filter: contrast(0) brightness(1.15);
   }

   @media screen and (min-width: 768px) {
      font-size: 1rem;
   }
`