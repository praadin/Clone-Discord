import styled from 'styled-components';

export const Container = styled.div`
   grid-area: SL;

   display: flex;
   flex-direction: column;
   align-items: center;

   background-color: var(--tertiary);

   padding: 11px 0;

   max-height: 100vh;
   overflow-y: scroll;

   ::-webkit-scrollbar{
      display: none;
      /* width: 3px; */
   }

/*    ::-webkit-scrollbar-button {
      display: none;
   }

   ::-webkit-scrollbar-thumb {
      background-color: var(--quinary);
      border-radius: 8px;
   }

   ::-webkit-scrollbar-track-piece {
      display: none;
   } */
`;

export const Separator = styled.div`
   width: 32px;
   border-bottom: 2px solid var(--quaternary);

   margin-bottom: 8px
`;
