import React from "react";
import {
  Container,
  Row,
  Column,
  NavLink,
  FooterLink,
  Heading,
} from "./FooterStyles";

function Footer() {
  /*
  return (
    <footer className="footer"> 
       <p>This is react sticky footer!!</p> 
  
    </footer>
  );
  */

  return (
    <footer className="footer"> 
       <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>            
	    <NavLink to="/about">About </NavLink>
            <NavLink to="/events">Events </NavLink>
            <NavLink to="/annual">Annual Report </NavLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">Writing</FooterLink>
            <FooterLink href="#">Internships</FooterLink>
            <FooterLink href="#">Coding</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">Uttar Pradesh</FooterLink>
            <FooterLink href="#">Ahemdabad</FooterLink>
            <FooterLink href="#">Indore</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
  
    </footer>
  );
}

export default Footer;