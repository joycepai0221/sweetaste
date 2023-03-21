import styled from "styled-components";

export const FormContainer = styled.div`
  background: #3f5d45;
  color: #eaf0ed;
  width: ${({ big }) => (big ? "460px" : "390px")};
  /* margin: 65px auto; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: flex-start;
  margin-bottom: 8px;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0;
  }
`;

export const FormInnerWrapper = styled.div`
  padding: ${({ big }) => (big ? "40px 30px" : "30px")};
  padding-bottom: 0;
`;

export const FormHeader = styled.h3`
  font-size: 36px;
  line-height: 50px;
  text-align: center;
  margin: 8px auto 10px;
  white-space: nowrap;
`;

export const FormContent = styled.div`
  padding: 0;
  margin: 0;
`;
