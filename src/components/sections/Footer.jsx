import React from "react";
import {
  FooterSection,
  SocialIcons,
  SocialLinks,
  FooterText,
  FooterContainer,
} from "../../styles/components/sections/FooterStyle";
import { socialIcons } from "../../data/socialIcons";

function Footer() {
  return (
    <FooterSection>
      <FooterContainer>
        <FooterText>© 2022 Mike Arvene Lantin. All rights reserved.</FooterText>
        <SocialIcons>
          {socialIcons.map((icon, index) => (
            <SocialLinks
              href={icon.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
            >
              {icon.icon}
            </SocialLinks>
          ))}
        </SocialIcons>
      </FooterContainer>
    </FooterSection>
  );
}

export default Footer;
