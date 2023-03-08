import styled from 'styled-components';

export const StyledSummary = styled.div`
   padding: 1.5rem;

   h3 {
      color: var(--dark-blue);
      font-weight: 700;
      margin-bottom: 1.5rem;
   }

   section {
      display: flex;
      flex-direction: column;
      row-gap: 0.92rem;
      margin-bottom: 1.2rem;
   }

   button {
      width: 100%;
      border: none;
      border-radius: 30px;
      font-family: inherit;
      font-size: inherit;
      background-color: var(--dark-blue);
      color: var(--light-blue);
      padding: 1rem;
      transition: background 200ms;
   }

   button:hover {
      background-color: var(--gr-blue);
   }

`;