import Figure from 'react-bootstrap/Figure';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
const Figures = () => {
  return (
    <Container>
      <Figure>
        <Figure.Image
          width={171}
          height={180}
          alt="171x180"
          src="public/images/c1.jpg"
        />
        <Figure.Caption>
          Nulla vitae elit libero, a pharetra augue mollis interdum.
        </Figure.Caption>
      </Figure>
      <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src="public/images/i1.jpg" rounded width="200"/>
        </Col>
        <Col xs={6} md={4}>
          <Image src="public/images/i2.jpg" roundedCircle  width="200"/>
        </Col>
        <Col xs={6} md={4}>
          <Image src="public/images/i3.jpg" thumbnail  width="200"/>
        </Col>
      </Row>
    </Container>
    </Container>
  );
}
export default Figures