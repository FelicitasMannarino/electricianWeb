import Carousel from 'react-bootstrap/Carousel';
import './Home.css';
import { Element } from 'react-scroll';


function Home() {
  return (
    <div>

        <Carousel>
            <Carousel.Item>
             <img className='d-block w-100 carousel-img' src='https://d100mj7v0l85u5.cloudfront.net/s3fs-public/2023-04/dispositivos-de-proteccion-electrica-3.png' alt='instalaciones electricidad'/>
             <Carousel.Caption className='carousel-caption'>
                <h3 className='carousel-caption-text'>Electricista; instalador y montador</h3>
                <p className='carousel-caption-text'>Matriculado</p>
             </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
             <img className='d-block w-100  carousel-img' src='https://cursos.com/wp-content/uploads/2020/09/curso-aire-acondicionado.jpg' alt='instalacion aire acondicionado'/>
             <Carousel.Caption className='carousel-caption'>
                <h3>Aire acondicionado: instalacion y mantenimiento</h3>
                <p>Matriculado</p>
             </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

       <Element name='servicios-section'>
       <div className='home-services'>
        <h3>NUESTROS SERVICIOS</h3>
        <p>
        Para saber sobre servicios más personalizados{" "}
        <a href='https://wa.me/1163753243' className='contact-link'>
            contáctanos
        </a>
         </p>
        </div>
        <div className='container' id='servicios-section'>
        <div className='row'>
            <div className='col-md-3'>
            <div className='home card home-card'>
                <div className='card-body'>
                <h5 className='card-title'>Special title treatment</h5>
                <p className='card-text'>With supporting text below as a natural lead-in to additional content.</p>
                </div>
            </div>
            </div>
            <div className='col-md-3'>
            <div className='home card home-card'>
                <div className='card-body'>
                <h5 className='card-title'>Special title treatment</h5>
                <p className='card-text'>With supporting text below as a natural lead-in to additional content.</p>
                </div>
            </div>
            </div>
            <div className='col-md-3'>
            <div className='home card home-card'>
                <div className='card-body'>
                <h5 className='card-title'>Special title treatment</h5>
                <p className='card-text'>With supporting text below as a natural lead-in to additional content.</p>
                </div>
            </div>
            </div>
            <div className='col-md-3' >
            <div className='home card home-card'>
                <div className='card-body'>
                <h5 className='card-title'>Special title treatment</h5>
                <p className='card-text'>With supporting text below as a natural lead-in to additional content.</p>
                </div>
            </div>
            </div>
        </div>
        </div>
        </Element>
      
        <Element name='us-section'>
        <div className='about-us'>
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="https://agenciadeaprendizaje.bue.edu.ar/wp-content/uploads/2021/04/Montador-electricista-domiciliario.jpg"  className='img-fluid rounded-start card-img' alt="..."/>
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                <h5 class="card-title">EG Electricistas</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</p>
        </div>
      </div>
    </div>
  </div>
   </div>
   </Element>

    </div>
  );
}

export default Home;