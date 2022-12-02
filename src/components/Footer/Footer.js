import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel:8779814241'>8779814241</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:shubham.chaube18@gmail.com'>shubham.chaube18@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            Innovating one project at a time.
          </Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href='https://www.github.com/Shuboy18'>
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href='https://https://www.linkedin.com/in/shubham-chaube-902aab257'>
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href='https://www.instagram.com/ig__shuboy'>
        <AiFillInstagram size="3rem"/>
      </SocialIcons>
      </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
