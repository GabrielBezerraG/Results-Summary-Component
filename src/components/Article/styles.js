import styled from "styled-components";

export const StyledArticle = styled.article`

   background-color: ${(props) => props.backgroundColor};
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 1rem;
   border-radius: 10px;
   font-size: 0.9rem;

   h4 {
      display: flex;
      align-items: center;
      column-gap: 0.5rem;
      color: ${(props) => props.color};
      filter: contrast(0.75);

      i {
      background: url(${(props) => props.icon}) center / contain no-repeat;
      width: 19px;
      height: 19px;
      display: inline-block;
      }
   }

   h5 {
      font-weight: 700;
   }

   .score {
         color: var(--dark-blue);
   }

   .hundred {
      filter: contrast(0) brightness(1.15);
   }
`