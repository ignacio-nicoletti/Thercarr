import {Navbar} from '../../components/navbar/navbar';
import style from './home.module.css';
import banner from '../../assets/banner-home.jpg';
import {Footer} from '../../components/navbar/footer/footer';
import mantenimiento from '../../assets/repaciones.png';
import reparacion from '../../assets/repuestos.png';
import auxilio from '../../assets/servicio.png';

const Home = () => {
  return (
    <div className={style.contain}>
      <Navbar />
      <div
        className={style.banner}
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        data-aos-duration="2000"
      >
        <p>Thercarr</p>
        <img src={banner} alt="" className={style.imgbanner} />
      </div>

      {/* servicios */}
      <div className={style.servicesContainMain}>
        <h2 id="service">Servicios</h2>
        <div className={style.servicesContain}>
          <div className={`${style.services} ${style.mantenimiento}`}>
            <p>Mantenimiento y reparación de unidades frigoríficas.</p>
          </div>
          <div className={`${style.services} ${style.center}`}>
            <p>Contamos con stock en todos los repuestos originales.</p>
          </div>
          <div className={`${style.services} ${style.auxilio}`}>
            <p>
              {' '}
              Servicios de auxilio en ruta, como así una linea de comunicación 24/7.
            </p>
          </div>
        </div>
      </div>

      {/*ubicacion */}
      <div id="ubication">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.8518250781567!2d-68.81212359999999!3d-32.928512899999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e0bf876eb5cad%3A0x44a980a1386a282c!2sThermo%20King%20Mendoza%20Thercarr%20Equipos%20de%20Fr%C3%ADo!5e0!3m2!1ses-419!2sar!4v1697327993809!5m2!1ses-419!2sar"
          width="100%"
          height="500"
          style={{border: 0}}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="banner"
        />
      </div>
      {/* Horarios */}

      <div className={style.horariosContain} id="horarios">
        <div>

          <h3>Horarios</h3>
          <p>
            De lunes a viernes de 8:00hs a 18:00hs
          </p>
        </div>
        <div>

          <a
            href="https://wa.me/+5492615090522"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>
              Contactanos
              {' '}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-brand-whatsapp"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
              </svg>
            </button>
          </a>
        </div>
      </div>

      <Footer />

    </div>
  );
};

export default Home;
