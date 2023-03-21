import React from "react";
import {
  InfoContainer,
  MobileInfoHeader,
  MobileInfoHeaderImg,
  InfoImgWrapper,
  InfoImg,
  InfoContentWrapper,
  InfoInnerWrapper,
  InfoHeaderImg,
  InfoPWrapper,
  InfoP,
} from "./InfoSectionElements";

const InfoSection = ({
  id,
  bg,
  showHeaderImg,
  headerImg,
  mobileHeaderImg,
  showParagraph,
  content1,
  content2,
  showImg,
  img,
  flexstart,
}) => {
  return (
    <InfoContainer key={id} bg={bg} flexstart={flexstart}>
      <MobileInfoHeader>
        <MobileInfoHeaderImg
          showHeaderImg={showHeaderImg}
          src={mobileHeaderImg}
          showImg={showImg}
          flexstart={flexstart}
        />
      </MobileInfoHeader>
      <InfoImgWrapper showImg={showImg}>
        <InfoImg src={img} flexstart={flexstart} />
      </InfoImgWrapper>
      <InfoContentWrapper showImg={showImg} bg={bg}>
        <InfoInnerWrapper flexstart={flexstart} showImg={showImg}>
          <InfoHeaderImg
            showHeaderImg={showHeaderImg}
            src={headerImg}
            showImg={showImg}
            flexstart={flexstart}
          />
          <InfoPWrapper showParagraph={showParagraph} showImg={showImg}>
            <InfoP>{content2}</InfoP>
            <InfoP>{content1}</InfoP>
          </InfoPWrapper>
        </InfoInnerWrapper>
      </InfoContentWrapper>
    </InfoContainer>
  );
};

export default InfoSection;
