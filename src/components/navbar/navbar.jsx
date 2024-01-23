import React, {useState} from 'react';
import styles from './navbar.module.css';
import {NavLink} from 'react-router-dom';
import logo from '../../assets/Thercarr.jpg';

export const Navbar = () => {
  const [openNavBar, setOpenNavBar] = useState (false);

  return (
    <div>
      <div className={styles.contain}>
        <div className={styles.logo}>
          <NavLink to="/"><img src={logo} alt="logo" /></NavLink>
        </div>
        <div className={styles.routes}>
          <NavLink to="/" className={styles.link}>
            Inicio
          </NavLink>
          <a href="/#service" className={styles.link}> Servicios </a>
          <a href="/#ubication" className={styles.link}> Ubicacion </a>
          <a href="/#horarios" className={styles.link}>Contacto </a>
          <NavLink to="/about" className={styles.link}>
            Nosotros
          </NavLink>

        </div>
      </div>

      <div className={styles.containMobile}>
        <div className={styles.logoMobile}>
          <NavLink to="/"><img src={logo} alt="logo" /></NavLink>
          {openNavBar
            ? <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-x"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                onClick={() => setOpenNavBar (!openNavBar)}
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M18 6l-12 12" />
                <path d="M6 6l12 12" />
              </svg>
            : <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                onClick={() => setOpenNavBar (!openNavBar)}
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 6l16 0" />
                <path d="M4 12l16 0" />
                <path d="M4 18l16 0" />
              </svg>}
        </div>
        {openNavBar
          ? <div className={styles.routesMobile}>

              <NavLink to="/" className={styles.linkMobile}>
                Inicio
              </NavLink>
              <a href="/#service" className={styles.linkMobile}> Servicios </a>
              <a href="/#ubication" className={styles.linkMobile}> Ubicacion </a>
              <a href="/#horarios" className={styles.linkMobile}>Contacto </a>
              <NavLink to="/about" className={styles.linkMobile}>
                Nosotros
              </NavLink>
            </div>
          : ''}
      </div>

    </div>
  );
};
