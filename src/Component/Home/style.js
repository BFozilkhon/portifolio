import styled from 'styled-components';
import { ReactComponent as search } from '../../assets/icons/search.svg';
import { ReactComponent as facebook } from '../../assets/icons/facebook.svg';
import { ReactComponent as insta } from '../../assets/icons/insta.svg';
import { ReactComponent as twit } from '../../assets/icons/twit.svg';


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 137px;
  margin-top: 109px;
`;



export const Info = styled.div`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  width: 600px;
  font-size: 50px;
  line-height: 140%;
  color: rgba(255, 255, 255, 0.9);
`;

export const SubInfo = styled.div`
  width: 487px;
  height: 60px;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 30px;
  color: rgba(255, 255, 255, 0.55);
  margin-top: 30px;
`;

export const InputWrap = styled.div`
  display: flex;
  align-items: center;
  width: 497.66px;
  height: 64px;
  background: #283036;
  border-radius: 15px;
  margin-top: 60px;
  margin-bottom: 110px;
  outline: none;
  border: none;
`;


export const Input = styled.input`
  width: 497.66px;
  background: #283036;
  outline: none;
  border: none;
  margin-left: 18px;
`;


export const Search = styled(search)`
margin-left: 18px;
`

export const Button = styled.button`
  width: 140px;
  height: 48px;
  color: #fff;
  background: #1e252b;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  margin-right: 11px;
  :hover {
    background: #ff6e30;
  }
`;


export const IconWrap = styled.div`
display: flex;
align-items: center;
column-gap: 40px;
margin-left: 15px;
`

export const Facebook = styled(facebook)``
export const Insta = styled(insta)``
export const Twit = styled(twit)``;

