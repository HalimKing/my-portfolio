import React from 'react'
import './Skills.css'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import iconsData, { backEndIcons } from './icons-data'
import StarIcon from '@mui/icons-material/Star';


const Skills = () => {
  console.log(iconsData);
  
  return (
    <div className='skills container' id='skills'>
      <h1 className='h1'>Skills</h1>
      <div className='skills-body'>
        <div className='row'>
          <div className='col-6'>
            <h3>Front-End  </h3>
            <ul>
            {iconsData.map((icon) => (
              <li key={icon.id}> <img src={icon.img} alt='' /> {icon.name}</li>
            ))}
              
            </ul>
          </div>
          <div className='col-6'>
            <h3>Back-End</h3>
            <ul>
              {backEndIcons.map((icon) => (
                <li key={icon.id}> <img src={icon.img} alt='' /> {icon.name}</li>
              ))}
              
            </ul>
          </div>

        </div>
        
      </div>
    </div>
  )
}

export default Skills