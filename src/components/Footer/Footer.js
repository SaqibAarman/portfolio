import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiFillPhone,
} from "react-icons/ai";
import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>
            {" "}
            <AiFillPhone size="2rem" /> Call{" "}
          </LinkTitle>
          <LinkItem href="tel:+91-9740741655">+91-9740741655</LinkItem>
        </LinkColumn>

        <LinkColumn>
          <LinkTitle>
            {" "}
            <AiFillMail size="2rem" /> Email
          </LinkTitle>
          <LinkItem href="mailto:saqibahmedaarhan@gmail.com">
            saqibahmedaarhan@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>

      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating The World With MERN Stack</Slogan>
        </CompanyContainer>

        <SocialContainer>
          <SocialIcons href="https://github.com/SaqibAarman">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/saqib-ahmed-81b611187/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          {/* <SocialIcons href="https://instagram.com">
        <AiFillInstagram size="3rem" />
      </SocialIcons> */}
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
