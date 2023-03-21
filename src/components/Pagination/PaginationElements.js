import styled from "styled-components";
import { RiArrowLeftSFill, RiArrowRightSFill } from "react-icons/ri";
export const PaginationContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 42px;
  margin-bottom: 60px;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const ArrowWrapper = styled.div`
  width: 60px;
  height: 60px;
  border: 1px solid #eaf0ed;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
export const LeftArrow = styled(RiArrowLeftSFill)`
  font-size: 24px;
  color: #3f5d45;
`;

export const PageButton = styled.div`
  width: 60px;
  height: 60px;
  border: 1px solid #eaf0ed;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const RightArrow = styled(RiArrowRightSFill)`
  font-size: 24px;
  color: #3f5d45;
`;
