import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoA from '../../assets/images/logo-a.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={LogoA} alt="logo" />
      <img className="sub-logo" src={LogoSubtitle} alt="Akhundzada" />
    </Link>

    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>

      <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>

      <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>
    </nav>
    <ul>
        <li>
            <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/hajy/'>
                <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
            </a>
        </li>
        <li>
            <a target='_blank' rel='noreferrer' href='https://api.whatsapp.com/send/?phone=994554587490'>
                <FontAwesomeIcon icon={faWhatsapp} color='#4d4d4e' />
            </a>
        </li>
        <li>
            <a target='_blank' rel='noreferrer' href='https://github.com/haJye'>
                <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
            </a>
        </li>
        <li>
            <a target='_blank' rel='noreferrer' href='https://www.facebook.com/akhundzada.hajy/'>
                <FontAwesomeIcon icon={faFacebook} color='#4d4d4e' />
            </a>
        </li>
        <li>
            <a target='_blank' rel='noreferrer' href='https://www.instagram.com/hajyakh/'>
                <FontAwesomeIcon icon={faInstagram} color='#4d4d4e' />
            </a>
        </li>
    </ul>
  </div>
)

export default Sidebar
