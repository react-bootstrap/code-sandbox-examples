import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import ButtonLink from './ButtonLink';

function Page2() {
  // Types for Link doesn't allow arbitrary props.
  const LinkComponent = Link as any;

  return (
    <Container>
      <h1>Page 2</h1>
      <LinkComponent to="/" variant="danger" component={ButtonLink}>
        Go to Page 1
      </LinkComponent>
    </Container>
  );
}

export default Page2;
