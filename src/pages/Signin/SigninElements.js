import styled from "styled-components";

export const SigninWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 60%;
  margin: 0 auto 60px;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    width: 100%;
    padding: 0;
  }
`;
