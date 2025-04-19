import React from 'react'
import './Service.css'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import GitHubIcon from '@mui/icons-material/GitHub';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import services from '../../services'



const Service = () => {
  // Array of services
    
  return (
    <div className='service container' id='services'>
      <h1 className='h1'>My Services</h1>
      <div className='service-body'>
        {services.map((service) => (
          <div className='service-card' key={service.id}>
            <div className='card-img'>
              <img src={service.image} alt={service.title} />
            </div>
            <div className='card-text'>
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </div>
            <div className='card-btn'>
              <a className='btn btn-preview' href={service.previewLink}>
                Live Preview <ArrowRightAltIcon />
              </a>
              <a className='btn btn-github' href={service.githubLink}>
                <GitHubIcon /> Check on github
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Service