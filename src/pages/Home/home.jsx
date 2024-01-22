import {Navbar} from '../../components/navbar/navbar';
import style from './home.module.css';
import banner from '../../assets/banner-home.jpg';
import {Footer} from '../../components/navbar/footer/footer';

const Home = () => {
  return (
    <div className={style.contain}>
      <Navbar />
      <div className={style.banner}>
        <p>Thercarr</p>
        <img src={banner} alt="" className={style.imgbanner} />
      </div>

      {/* servicios */}
      <h2 id="service">Servicios</h2>
      <div className={style.servicesContain}>

        <div className={style.services}>
          <p>Mantenimiento y reparación de unidades frigoríficas.</p>
        </div>
        <div className={`${style.services} ${style.center}`}>
          <p>Contamos con stock en todos los repuestos originales.</p>
        </div>
        <div className={style.services}>
          <p>
            Servicios de auxilio en ruta, como así una linea de comunicación 24/7.
          </p>
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
          </button>
        </a>
          </div>
      </div>

      <Footer />

    </div>
  );
};

export default Home;
