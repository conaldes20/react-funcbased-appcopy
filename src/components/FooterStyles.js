import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
  
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    /* background: red; */
`
   
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 30px;
`;
   
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(185px, 1fr));
  grid-gap: 20px;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
`;

export const NavLink = styled(Link)`
  color: #fff;
  margin-bottom: 7px;
  font-size: 14px;
  text-align: left;
  text-decoration: none;

  &:hover {
      color: green;
      transition: 200ms ease-in;
  }
`;
 
export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 7px;
  font-size: 14px;
  text-decoration: none;

  &:hover {
      color: green;
      transition: 200ms ease-in;
  }
`;
 
export const Heading = styled.p`
  font-size: 18px;
  color: #fff;
  margin-bottom: 10px;
  font-weight: bold;
`;