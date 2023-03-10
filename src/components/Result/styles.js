import styled from "styled-components";

export const StyledResult = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   text-align: center;
   background: linear-gradient( var(--gr-light-violet), var(--gr-blue) );
   padding: 1.5rem 3rem 2.25rem;
   border-radius: 0 0 30px 30px;

   h1 {
      color: var(--lavender);
      margin-bottom: 1.45rem;
      font-weight: 700;
   }

   .result__circle {
      width: 140px;
      height: 140px;
      background: linear-gradient( var(--gr-violet), var(--gr-opaque) );
      border-radius: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 1.85rem;
      row-gap: 0.6rem;
      box-sizing: border-box;
      margin-bottom: 1.5rem;

      h2 {
         font-size: 3.1rem;
         font-weight: 700;
         color: var(--white);
      }

      span {
         font-size: 0.85rem;
         color: var(--lavender);
         filter: brightness(0.8);
      }
   }

   h3 {
      font-size: 1.3rem;
      color: var(--white);
      margin-bottom: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.25px;
   }

   p {
      color: var(--lavender);
      font-size: 0.9rem;
      line-height: 1.15rem;
   }

   @media screen and (min-width: 768px) {
      border-radius: 30px;
      padding: 2.35rem 3.25rem 3rem;

      h1 {
         margin-bottom: 2.15rem;
         font-size: 1.32rem;
         margin-right: 0.25rem;
      }

      .result__circle {
         width: 200px;
         height: 200px;
         padding-top: 3.05rem;
         row-gap: 0.4rem;
         margin-bottom: 1.9rem;

         h2 {
            font-size: 4rem;
         }

         span {
            font-size: 1rem;
         }
      }

      h3 {
         font-size: 1.75rem;
         margin-bottom: 1rem;
         margin-right: 0.25rem;
      }

      p {
         font-size: 1rem;
         line-height: 1.28rem;
      }
   }
`;