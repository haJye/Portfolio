import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState, useRef  } from 'react'
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2';
import { MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'

const Contact = () => {
  const position = [40.36539, 49.9654]
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()
  const showSuccess = () => {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Message sent successfully',
        showConfirmButton: false,
        timer: 750
    })
}


  const justDoIt = async () => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }
  useEffect(() => {
    justDoIt()
  }, [])
const sendEmail = (e)=>{
    e.preventDefault()
    emailjs
        .sendForm(
            'service_hchkurk',
            'template_7s85rwf',
            refForm.current,
            'ToNje3WeXYAsml3yi'
        ).then(
          ()=>{
          window.location.reload(false)
        },
        ()=>{
          
        })
}

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>Heloooooooooooooooooooooooooooooooooooooooooooooooooo</p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>

                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="Send" onClick={showSuccess}/>
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className='info-map'> 
          Haji Akhundzada 
          <br />
          Azerbaijan
          <br />
          Baku <br /> 
          Shixlinski 47 <br />
          <span> axundzade02@gmail.com </span>

        </div>
        <div className='map-wrap'>
          <MapContainer center={position} zoom={13}>
          <TileLayer
            // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup> haJy lives here, come over for a cup of coffee</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Contact
