import Container from 'react-bootstrap/Container';
import ButtonLink from './ButtonLink';

function Page1() {
  return (
    <Container>
      <h1>Page 1</h1>
      <ButtonLink to="/page2">Go to Page 1</ButtonLink>
    </Container>
  );
}

export default Page1;
