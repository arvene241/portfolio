import React from "react";
import { Hover, StyledButton } from "../styles/components/ButtonStyle";
import { motion } from "framer-motion";
import { YAnimate } from "../data/animations";

function Button({ link, text, icon, download }) {
  return (
    <>
      {download ? (
        <StyledButton
          href={link}
          target="_blank"
          rel="noreferrer"
          download
          as={motion.a}
          variants={YAnimate}
        >
          <Hover>
            {text}
            {icon}
          </Hover>
        </StyledButton>
      ) : (
        <StyledButton href={link} as={motion.a} variants={YAnimate}>
          <Hover>
            {text}
            {icon}
          </Hover>
        </StyledButton>
      )}
    </>
  );
}

export default Button;
