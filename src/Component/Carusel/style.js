import styled from 'styled-components'
import Rectangle from '../../assets/icons/Rectangle.png'
export const Container = styled.div` 
  width: 80%;
  margin: 50px auto;
  @media(max-width:1024px){
    width: 90%;
  }
  
`
export const Item = styled.div`
  width: 85%;
  height: 60vh;
  display: grid;
  grid-template-columns: 50% auto;
  gap: 50px;
  align-items: center;
  color: #FFFFFFC7;
  @media(max-width:1024px){
    width: 100%;
  }
  @media(max-width: 425px){
      grid-template-columns: 100%;
      height: auto;
  }
`
export const Img_card = styled.div` 
  position: relative;
  width: 100%;
  display: flex;
`
export const Img = styled.img` 
  @media(max-width:1440px){
    width: 100%;
  }
`
export const Img_text = styled.div`
  position:absolute;
  bottom: 20px;
  right: 0px;
  background: url(${Rectangle});
  border-radius: 8px;
  padding: 15px 50px;
  display: inline;
  @media(max-width:375px){
    font-size: 13px;
    padding: 12px 30px;
  }
  @media(max-width:325px){
    font-size: 8px;
    padding: 8px 20px;
  }
`
export const Text = styled.div` 
    width: 100%;
    font-size: 14px;
    line-height: 30px;
    @media(max-width: 425px){
      display: none;
    }
`
export const Flex = styled.div` 
  display: flex;
  margin: 20px auto;
  justify-content: space-between;
`
export const Square = styled.div` 
    width: 30px;
    height: 8px;
    background-color:#FF6E30;
    border-radius: 4px;
    cursor: pointer;
    margin: 10px;
`
