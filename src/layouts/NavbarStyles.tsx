import styled from "styled-components";
export const NavUnlisted = styled.ul`
  display: flex;
  align-items: center;
  background-color: var(--light-red);
  margin: 0;
  padding: 1rem;
  flex-direction: row-reverse;
  justify-content: space-between;
  .active {
    border-bottom: 2px solid black;
  }
`;
