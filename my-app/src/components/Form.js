import './FormStyles.css'
import React, { useState } from 'react'
import emailjs from '@emailjs/browser';

const Result =() =>{
  return(
    <p>Your message has been successfully sent. I will contact you soon.</p>
  )
}

const Form = () => {
  const [result, showResult]= useState(false);


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_741capr', 'template_lf2200o',  'gpsDsmyswhD9CTLqk')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      }); e.target.reset();
      showResult(true);
    }
    
  return (
    <form action=''  onSubmit={sendEmail}>
  <div className='c-form'>
    <form>
        <label>Your Name</label>
        <input type='text'></input>
        <label>Email</label>
        <input type='text'></input>
        <label>Queries</label>
        <input type='text'></input>
        <label>Other message</label>
        <textarea rows='6' placeholder='Type your message' />
        <button className='btn'>Submit</button>
        <div className='row'>
          {
            result ? <Result/> :null
          }
        </div>
        
    </form>
  </div>
  </form>
  )
}

export default Form

