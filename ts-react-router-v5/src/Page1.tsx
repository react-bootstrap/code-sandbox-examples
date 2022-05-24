import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import ButtonLink from './ButtonLink';

function Page1() {
  return (
    <Container>
      <h1>Page 1</h1>
      <Link to="/page2" component={ButtonLink}>Go to Page 1</Link>
    </Container>
  )
}

export default Page1