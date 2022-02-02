import styled from "styled-components";
import { ReactComponent as logo } from "../../assets/icons/logo.svg";

export const Container = styled.div`
  width: 80%;
  height: 100px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1200px) {
    width: 90%;
  }
`;

export const Logo = styled(logo)`
  width: 60px;
  height: 60px;
`;

export const Headers = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  color: rgba(255, 255, 255, 0.9);
  margin-left: 15px;
`;

export const NavItems = styled.div`
  display: flex;
  align-items: center;
`;

export const Item = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  color: rgba(255, 255, 255, 0.55);
  margin: 0px 40px;
  @media (max-width: 1500px) {
    margin: 0px 20px;
  }
`;

export const Button = styled.div`
  background: ${({ nones }) => (nones ? "none" : "#FF6E30")};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  color: #ffffff;
  width: ${({ nones }) => (nones ? "130px" : "160px")};
  height: 60px;
  margin-left: ${({ nones }) => nones && "10px"};
`;
