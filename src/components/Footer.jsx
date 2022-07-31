import React from "react"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer(props){
  const year = new Date().getFullYear();
  return (<footer>
    <p>
    Anime data taken from <a target="_blank" rel="noreferrer" href="https://myanimelist.net">MAL </a>
    with <a target="_blank" rel="noreferrer" href="https://jikan.moe/">Jikan API, </a>
    and using <a target="_blank" rel="noreferrer" href="https://animixplay.to/">AnimixPlay </a>
    for the streaming links.
    </p>
    <div>
      <a target="_blank" rel="noreferrer" href="https://github.com/Kraizan"><GitHubIcon fontSize="large"/></a>
      <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/vanshaj-bhatnagar-a0969a214/"><LinkedInIcon fontSize="large" /></a>
      <a target="_blank" rel="noreferrer" href="https://www.instagram.com/vanshajbhatnagar/"><InstagramIcon fontSize="large" /></a>
    </div>
    <p>©{year} Vanshaj Bhatnagar</p>
  </footer>)
}
