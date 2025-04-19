import React from 'react'
import './Contact.css'
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { useState } from 'react';
import { Slide, toast, ToastContainer } from 'react-toastify';


const Contact = () => {
  const [result, setResult] = useState("");


  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "dbd39f60-b8ea-4fc0-87d9-b74925a3a93b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      toast.success('Your message is well received! I will get back to you soon.', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Slide,
        });
        
      setResult("Your message is well received! I will get back to you soon.");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div className='contact container' id='contact'>
        <div className='contact-title'>
            <h1 className='h1'>Get In Touch</h1>
            <h4>I'm looking forward to start a project with you.</h4>
        </div>
       
        <div className='contact-body'>
            <div className='contact-left'>
                <h2>Contact Me</h2>
                <form onSubmit={onSubmit} >
                    <input type='text' name='name' className='form-control' placeholder='Full Name' />
                    <input type='email' name='email' className='form-control' placeholder='Email' />
                    <textarea placeholder='Message' name='message' className='form-control'></textarea>
                    <button className='btn-submit' type='submit'>
                      {
                        result === "Sending...." ? 'Sending...' : 'Send Message'
                      }
                    </button>
                </form>
            </div>
            <div className='contact-right'>
                <ul className='detail-box'>
                  <li> <EmailOutlinedIcon className='icon' />  Mohammedhalim1779@gmail.com</li>  
                  <li> <PhoneAndroidOutlinedIcon className='icon' /> (+233) 546399552 / (+233) 209687565</li>  
                  <li> <MapOutlinedIcon className='icon' /> XW-0940-8390, WA Upper West Region, Ghana</li>  
                </ul>
            </div>

        </div>

        {/* Toastify Container */}
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover={false}
          theme="dark"
          transition={Slide}
        />
    </div>
  )
}

export default Contact