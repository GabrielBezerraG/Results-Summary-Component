import styled from 'styled-components';

export const StyledSummary = styled.div`
   padding: 1.5rem 1.65rem;

   h3 {
      color: var(--dark-blue);
      font-weight: 700;
      margin-bottom: 1.45rem;
      letter-spacing: -0.25px;
   }

   section {
      display: flex;
      flex-direction: column;
      row-gap: 0.9rem;
      margin-bottom: 1.3rem;
   }

   button {
      width: 100%;
      border: none;
      border-radius: 30px;
      font-family: inherit;
      font-size: 1.02rem;
      background-color: var(--dark-blue);
      color: var(--light-blue);
      padding: 0.9rem 1rem;
      transition: background 200ms;
      cursor: pointer;
   }

   button:hover {
      background-color: var(--gr-blue);
   }

   @media screen and (min-width: 768px) {
      padding: 2.35rem 2.2rem;

      h3 {
         font-size: 1.35rem;
         margin-bottom: 1.72rem;
      }

      section {
         margin-bottom: 2.25rem;
      }
   }

`;