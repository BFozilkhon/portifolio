import styled from 'styled-components';

import { ReactComponent as Icon1 } from '../../assets/icons/zeplin.svg';

export const Container = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Box = styled.div`
  width: 288px;
  height: 284px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;

  :hover {
    background: rgba(40, 48, 54, 0.6);
    background: rgba(255, 110, 48, 0.6);
    backdrop-filter: blur(50px);

    /* Note: backdrop-filter has minimal browser support */
  }
`;

export const Flex = styled.div`
  display: flex;
`;

export const Icon = styled(Icon1)``;

export const Title = styled.div`
  width: 401px;
  height: 62px;

  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 130%;
  /* or 62px */

  color: rgba(255, 255, 255, 0.9);
`;

export const BoxTitle = styled.div`
  height: 36px;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  /* identical to box height */

  color: rgba(255, 255, 255, 0.78);
`;

export const Description = styled.div`
  width: 427px;
  height: 90px;

  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;
  /* or 167% */
  color: rgba(255, 255, 255, 0.55);
  margin: 30px 0 60px 0;
`;

export const Button = styled.button`
  width: 198px;
  height: 58px;

  background: #ff6e30;
  border-radius: 8px;

  text-decoration: none;
`;
