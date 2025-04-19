import React from 'react'
import './Footer.css'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
const Footer = () => {
  return (
    <div className='footer'>
      <a className='btn' href='#'> <FacebookOutlinedIcon /> </a>
      <a className='btn' href='#'> <LinkedInIcon /> </a>
      <a className='btn' href='#'> <XIcon /> </a>
      <a className='btn' href='#'> <InstagramIcon /> </a>
    </div>
  )
}

export default Footer