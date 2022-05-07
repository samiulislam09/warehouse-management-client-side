import { faClock, faEnvelope, faLocationDot, faMobileScreenButton } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './ContactUs.css'

function ContactUs() {
  return (
    <div>
        <div className='contact-us-container'>
          <div className="address">
              <FontAwesomeIcon className='icon' icon={faLocationDot}></FontAwesomeIcon>
              <h3 className='heading'>Address</h3>
              <p>Mirpur-10, Dhaka-1216</p>
          </div>
          <div className="callus">
              <FontAwesomeIcon className='icon' icon={faMobileScreenButton}></FontAwesomeIcon>
              <h3 className='heading'>Call Us</h3>
              <p>+880155555555</p>
              <p>+880122222222</p>
              <p>+880188888888</p>
          </div>
          <div className="mail">
              <FontAwesomeIcon className='icon' icon={faEnvelope}></FontAwesomeIcon>
              <h3 className='heading'>Email</h3>
              <p>info@abcd.com</p>
              <p>help@eeeee.com</p>

          </div>
          <div className="work-hour">
              <FontAwesomeIcon className='icon' icon={faClock}></FontAwesomeIcon>
              <h3 className='heading'>Work Hours</h3>
              <p>Monday - Sunday
                  10AM - 09PM</p>
          </div>
    </div>
    </div>
  )
}

export default ContactUs