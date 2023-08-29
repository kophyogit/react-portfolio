import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { Icon } from 'leaflet'

const customIcon = new Icon({
  iconUrl: 'https://img.icons8.com/?size=512&id=ZPLpfsKE1OLu&format=png',
  iconSize: [38, 38]
})

const Contact = () => {

  const refForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
    .sendForm(
      'service_67y92wh',
      'template_u7b9cs3',
      refForm.current, // Use the form reference directly
      'sW0ey3eIKSiiLL9aT'
    )
    .then(
      () => {
        alert('Message sent!')
        window.location.reload(false)
      },
      () => {
        alert('Failed')
      }
    )
  }
  
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
     setLetterClass('text-animate-hover')
   }, 3000)
 }, [])

  return (
    <>
    <div className='container contact-page'>
      <div className='text-zone'>
        <h1>
          <AnimatedLetters letterClass={letterClass} strArray={['C','o','n','t','a','c','t',' ','m','e']}
          idx={15}
          />
        </h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
        <div className='contact-form'>
          <form ref={refForm} onSubmit={sendEmail}>
            <ul>
              <li className='half'>
                <input type='text' name='name' placeholder='Name' required />
              </li>
              <li className='half'>
                <input type='text' name='email' placeholder='Email' required />
              </li>
              <li>
                <input placeholder='Subject' type='text' name='subject' required />
              </li>
              <li>
                <textarea placeholder='Message' name='message' required
                ></textarea>
              </li>
              <li>
                <input type='submit' className='flat-button' value="SEND" />
              </li>
            </ul>
          </form>
        </div>
      </div>
      </div>
      <div className="info-map">
          KoPhyo,
          <br />
          Myanmar,
          <br />
          Yangon <br />
          Thakeyta, HtuParYone, HtuParYone 2nd, No.1115 <br />
          <br />
          Ph - 09762104241
          <br />
          <span>kophyo.xeno@gmail.com</span>
        </div>
      <div className='map-wrap'>
        <MapContainer center={[16.801774, 96.203686]} zoom={15}>
          <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
          <Marker position={[16.801774, 96.203686]} icon={customIcon}>
            <Popup>I live near here, come here for a cup of coffee :) </Popup>
          </Marker>
        </MapContainer>
      </div>
    <Loader type='pacman' />
    </>
  )
}

export default Contact