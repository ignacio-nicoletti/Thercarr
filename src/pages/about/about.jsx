import {Footer} from '../../components/navbar/footer/footer';
import {Navbar} from '../../components/navbar/navbar';
import style from './about.module.css';
import scannia from '../../assets/repuesto.png';
import reparacion from "../../assets/reparaciones.png"
import truckred from "../../assets/truckRed.png"

const About = () => {
  return (
    <div className={style.AboutContain}>
      <Navbar />
      <div className={style.dataContain}>
        <div
          className={`${style.divContain} ${style.mision} `}
          data-aos="fade-right"
          data-aos-duration="3000"
        >

          <h4>¿Cuál es nuestra misión?</h4>
          <div className={style.subDivContain}>

            <p>
              En Thercarr, nos dedicamos apasionadamente a proporcionar soluciones de refrigeración de
              vanguardia para el transporte, impulsando la frescura y la seguridad de los productos perecederos en
              todo el mundo. Nuestra misión es ser líderes en la industria, ofreciendo la reparación, el auxilio, el
              mantenimiento y la prevención en equipos de refrigeración de primera clase que superen las
              expectativas de nuestros clientes.
            </p>
            <img src={reparacion} alt="" />
          </div>
        </div>

        <div
          className={`${style.divContain} ${style.vision} `}
          data-aos="fade-left"
          data-aos-duration="3000"
        >
          <h4>¿Qué visión tenemos?</h4>
          <div className={style.subDivContain}>
            <img src={truckred} alt="" />
            <p>
              Thercarr se visualiza como un líder en la industria de refrigeración para el transporte en
              Argentina, con un enfoque global y una presencia sólida en América del Sur, incluyendo 2 sucursales
              estratégicas en Mendoza, Argentina, y 1 en Los Andes, Chile, en los próximos 15 años. Nuestra visión
              es ser reconocidos por nuestra innovación constante, calidad superior y un compromiso inquebrantable
              con la sostenibilidad, elevando así los estándares de la industria.
            </p>
          </div>
        </div>

        <div
          className={`${style.divContain} ${style.aquien} `}
          data-aos="fade-right"
          data-aos-duration="3000"
        >
          <h4>
            ¿A quién? y ¿Cómo?
          </h4>
          <div className={style.subDivContain}>

            <p>
              Empresas de Transporte y Logística, Clientes Minoristas y Consumidores Finales,
              Empresas de Alimentos Refrigerados, Congelados y/o Frescos. Thercarr satisface las
              necesidades de sus clientes y partes interesadas proporcionando soluciones de
              refrigeración de alta calidad y tecnológicamente avanzadas que garantizan la integridad de
              las cargas perecederas durante el transporte, contribuyendo así a la eficiencia, la
              sostenibilidad y la calidad en la cadena de suministro.
            </p>
            <img src={scannia} alt="" />         {' '}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
