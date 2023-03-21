import styled from "styled-components";
import { MdEmail } from "react-icons/md";
import { AiOutlineArrowRight } from "react-icons/ai";
import { ReactComponent as LightLogo } from "../../images/logo-light.svg";
import { ReactComponent as Header } from "../../images/desktop-今天是個吃甜點的好日子.svg";
import { ReactComponent as TitleSlogan } from "../../images/logotype-lg-dark.svg";
import { ReactComponent as FBSVG } from "../../images/ic-facebook.svg";
import { ReactComponent as LineSVG } from "../../images/ic-line.svg";

export const FooterContainer = styled.div`
  height: 451px;
`;

export const UpperWrapper = styled.div`
  height: 116px;
  padding: 0 122px;
  background: #3f5d45;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;

  @media screen and (max-width: 768px) {
    height: 186px;
    padding: 30px;
    padding-top: 34px;
    flex-direction: column;
    background: #3f5d45;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const FooterLogo = styled(LightLogo)`
  width: 40px;
  height: 40px;
  margin-right: 20px;
  & path {
    fill: #eaf0ed;
  }
`;

export const FooterH5 = styled.h5`
  font-size: 24px;
  color: #fff;
  margin: 0;
  white-space: nowrap;
`;

export const EmailForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 56px;
  position: relative;
`;

export const EmailIcon = styled(MdEmail)`
  color: #3f5d45;
  position: absolute;
  left: 20px;
`;

export const EmailInput = styled.input`
  outline: none;
  border: 0;
  font-size: 24px;
  padding: 16px 0;
  padding-left: 60px;
  padding-right: 20px;
  background: #eaf0ed;
  max-width: 316px;
  height: 56px;
`;

export const SubmitBtn = styled.button`
  background: #ffe180;
  width: 64px;
  height: 56px;
  color: #3f5d45;
  border: 0;
  outline: 0;
`;

export const RightArrow = styled(AiOutlineArrowRight)`
  width: 16px;
  height: 16px;
`;

export const LowerWrapper = styled.div`
  height: 341px;
  padding: 30px 122px;
  background: #eaf0ed;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    height: 311px;
    padding: 38.9px 30px 30px 30px;
    justify-content: unset;
    flex-direction: column;
  }
`;

export const FooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;

  @media screen and (max-width: 768px) {
    justify-content: flex-start;
  }
`;

export const FooterBottomLogo = styled(TitleSlogan)`
  align-self: flex-start;

  @media screen and (max-width: 768px) {
    height: 26.6px;
    margin-bottom: 39.5px;
  }
`;

export const ContactInfoWrapper = styled.div`
  align-self: flex-end;

  @media screen and (max-width: 768px) {
    align-self: flex-start;
  }
`;

export const ContactInfo = styled.div`
  text-align: left;
  height: 68px;
  margin-bottom: 30px;

  @media screen and (max-width: 768px) {
    margin-bottom: 37px;
  }
`;

export const FooterP = styled.p`
  font-size: 16px;
  color: #3f5d45;
  margin: 0;
`;

export const MediaGroup = styled.div`
  display: flex;
  justify-content: flex-start;

  @media screen and (max-width: 768px) {
    margin-bottom: 23px;
  }
`;

export const FB = styled(FBSVG)`
  width: 32px;
  height: 32px;
`;

export const Line = styled(LineSVG)`
  width: 32px;
  height: 32px;
  margin-right: 8px;
`;

export const FooterRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;

  @media screen and (max-width: 768px) {
    align-self: flex-start;
  }
`;

export const TitleImg = styled(Header)`
  width: 59.28px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const FooterRights = styled.p`
  margin: 0;
  color: #3f5d45;
  font-family: Times, sans-serif;
`;
