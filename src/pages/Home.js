import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Home(){
    return (
        <div className="HomeContainer">
          <HomeCarrusel></HomeCarrusel>
          <h3 className="custom-heading" style={{ textAlign: 'center' }}>Learn about our services</h3>
          <hr/>
          <HomeCard></HomeCard>
        </div>
      );
}


function HomeCarrusel() {
  return (
    <div className="Ccontainer">
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://espanacarshop.s3.amazonaws.com/slide3.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Trust service</h3>
          <p>Your vehicle in the best and experienced hands</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://espanacarshop.s3.amazonaws.com/slide1.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Variety of services</h3>
          <p>We have services for all your needs</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://espanacarshop.s3.amazonaws.com/slide2.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>The Best prices in the market</h3>
          <p>
          The best quality on the market at the best price
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

function HomeCard() {
    return (
    <div className="container">
        <div className="Card-container">
        <Card bg='dark'
            key='Dark'
            text={'dark' === 'light' ? 'dark' : 'white'}
            style={{ width: '18rem' }}
            className="mb-2">
            <Card.Body className="text-center justify-center">
            <Card.Title>Oil change</Card.Title>
            <Card.Text>
            An oil change is the process of draining old, used engine oil from a vehicle into a pan, and then replacing it with fresh, clean oil and a fresh oil filter.
            </Card.Text>
            <Card.Link href="/services"><Button variant="light">More Info</Button></Card.Link>
            </Card.Body>
        </Card>
        <Card bg='dark'
            key='Dark'
            text={'dark' === 'light' ? 'dark' : 'white'}
            style={{ width: '18rem' }}
            className="mb-2">
            <Card.Body className="text-center justify-center">
            <Card.Title>Brake change</Card.Title>
            <Card.Text>
            A brake repair is when certain mechanical parts like your car's brake pads and shoes, calipers, and rotors need repair or replacement.
            </Card.Text>
            <Card.Link href="/services"><Button variant="light">More Info</Button></Card.Link>
            </Card.Body>
        </Card>
        <Card bg='dark'
            key='Dark'
            text={'dark' === 'light' ? 'dark' : 'white'}
            style={{ width: '18rem' }}
            className="mb-2">
            <Card.Body className="text-center justify-center">
            <Card.Title>Alignment and balance</Card.Title>
            <Card.Text>
            Tire balancing uses weights on your wheels to keep your vehicle from vibrating, while an alignment keeps your wheels pointing in the same direction.
            </Card.Text>
            <Card.Link href="/services"><Button variant="light">More Info</Button></Card.Link>
            </Card.Body>
        </Card>
        <Card bg='dark'
            key='Dark'
            text={'dark' === 'light' ? 'dark' : 'white'}
            style={{ width: '18rem' }}
            className="mb-2">
            <Card.Body className="text-center">
            <Card.Title>General diagnosis</Card.Title>
            <Card.Text>
            A car diagnostic test can determine if your vehicle has issues with its engine, exhaust, transmission, ignition coils, oil tank, throttle, and more.
            </Card.Text>
            <Card.Link href="/services"><Button variant="light">More Info</Button></Card.Link>
            </Card.Body>
        </Card>
        </div> 
    </div>
    );
  }

export default Home;