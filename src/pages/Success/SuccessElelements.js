import styled from "styled-components";
import { Button } from "../../components/ButtonElements";
import Banner from "../../components/Banner";
import { ReactComponent as TitleImg } from "../../images/lg-付款成功 (1).svg";

export const SuccessBanner = styled(Banner)`
  position: relative;
`;

export const SuccessHead = styled(TitleImg)`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  width: 189.36px;
  color: #3f5d45;
`;

export const SuccessBtn = styled(Button)`
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
