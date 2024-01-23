import { Footer } from '../../components/navbar/footer/footer';
import {Navbar} from '../../components/navbar/navbar';
import style from './about.module.css';

const About = () => {
  return (
    <div className={style.AboutContain}>
      <Navbar />
      <div className={style.dataContain}>
        <div
          className={style.misionContain}
          data-aos="fade-right"
          data-aos-duration="3000"
        >

          <h4>¿Cuál es nuestra misión?</h4>
          <p>
            En Thercarr, nos dedicamos apasionadamente a proporcionar soluciones de refrigeración de
            vanguardia para el transporte, impulsando la frescura y la seguridad de los productos perecederos en
            todo el mundo. Nuestra misión es ser líderes en la industria, ofreciendo la reparación, el auxilio, el
            mantenimiento y la prevención en equipos de refrigeración de primera clase que superen las
            expectativas de nuestros clientes.
          </p>
        </div>

        <div
          className={style.visionContain}
          data-aos="fade-left"
          data-aos-duration="3000"
        >
          <h4>¿Qué visión tenemos?</h4>
          <p>
            Thercarr se visualiza como un líder en la industria de refrigeración para el transporte en
            Argentina, con un enfoque global y una presencia sólida en América del Sur, incluyendo 2 sucursales
            estratégicas en Mendoza, Argentina, y 1 en Los Andes, Chile, en los próximos 15 años. Nuestra visión
            es ser reconocidos por nuestra innovación constante, calidad superior y un compromiso inquebrantable
            con la sostenibilidad, elevando así los estándares de la industria.
          </p>
        </div>

        <div
          className={style.formaContain}
          data-aos="fade-right"
          data-aos-duration="3000"
        >
          <h4>
            ¿A quién? y ¿Cómo?
          </h4>
          <p>
            Empresas de Transporte y Logística, Clientes Minoristas y Consumidores Finales,
            Empresas de Alimentos Refrigerados, Congelados y/o Frescos. Thercarr satisface las
            necesidades de sus clientes y partes interesadas proporcionando soluciones de
            refrigeración de alta calidad y tecnológicamente avanzadas que garantizan la integridad de
            las cargas perecederas durante el transporte, contribuyendo así a la eficiencia, la
            sostenibilidad y la calidad en la cadena de suministro.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
