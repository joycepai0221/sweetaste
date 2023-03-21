import styled from "styled-components";
import { Button } from "../ButtonElements";
import { ReactComponent as FB } from "../../images/ic-facebook-logotype.svg";
import { ReactComponent as Google } from "../../images/ic-google.svg";

export const AccountFormContainer = styled.div`
  width: 50%;
  height: 350px;
  background-color: #eaf0ed;
  padding: 40px 30px;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0;
    padding: 0px;
    height: 116px;
  }
`;

export const AccountFormHeader = styled.h3`
  color: #8da291;
  font-size: 24px;
  text-align: center;
  margin-bottom: 36px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const AccountFormBtnWrapper = styled.div`
  padding: 0;

  @media screen and (max-width: 768px) {
    margin: 30px;
    display: flex;
  }
`;

export const AccountFormButton = styled(Button)`
  background: #ffffff;
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 32px 0;
  color: #8da291;

  @media screen and (max-width: 768px) {
    width: 50%;
    padding: 30px;
    border: 1px solid #eaf0ed;
    margin: 0;
  }
`;

export const FBIcon = styled(FB)`
  color: #8da291;
  height: 20.35px;

  @media screen and (max-width: 768px) {
  }
`;

export const GoogleIcon = styled(Google)`
  color: #8da291;
  height: 24.07px;
`;
