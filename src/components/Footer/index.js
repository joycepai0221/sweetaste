import React from "react";
import {
  FooterContainer,
  UpperWrapper,
  LogoWrapper,
  FooterLogo,
  FooterH5,
  EmailForm,
  EmailIcon,
  EmailInput,
  SubmitBtn,
  RightArrow,
  LowerWrapper,
  FooterLeft,
  FooterBottomLogo,
  ContactInfoWrapper,
  ContactInfo,
  FooterP,
  MediaGroup,
  Line,
  FB,
  FooterRight,
  TitleImg,
  FooterRights,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <UpperWrapper>
        <LogoWrapper>
          <FooterLogo />
          <FooterH5>訂閱你我的甜蜜郵件</FooterH5>
        </LogoWrapper>
        <EmailForm>
          <EmailIcon />
          <EmailInput />
          <SubmitBtn>
            <RightArrow />
          </SubmitBtn>
        </EmailForm>
      </UpperWrapper>
      <LowerWrapper>
        <FooterLeft>
          <FooterBottomLogo />
          <ContactInfoWrapper>
            <ContactInfo>
              <FooterP>07-1234-5678800</FooterP>
              <FooterP>sweetaste@email.com</FooterP>
              <FooterP> 高雄市新興區幸福路 520 號</FooterP>
            </ContactInfo>
            <MediaGroup>
              <Line />
              <FB />
            </MediaGroup>
          </ContactInfoWrapper>
        </FooterLeft>
        <FooterRight>
          <TitleImg />
          <FooterRights>© 2018 Sweetaste* All Rights Reserved</FooterRights>
        </FooterRight>
      </LowerWrapper>
    </FooterContainer>
  );
};

export default Footer;
