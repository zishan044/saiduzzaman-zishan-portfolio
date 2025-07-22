import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/zishan044" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/saiduzzaman-zishan-52943a280/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>A portfolio designed & built by <a href="https://github.com/zishan044/saiduzzaman-zishan-portfolio" target="_blank" rel="noreferrer">Saiduzzaman Zishan</a> with 💜</p>
    </footer>
  );
}

export default Footer;