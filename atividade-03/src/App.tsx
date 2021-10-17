import { Form, Container } from "./style";
import Fallen from "./images/fallen.jpg";

function App() {
  return (
    <Container>
      <Form>
        <span>subscribe for receive fallen notices</span>
        <input placeholder="name" />
        <input placeholder="email" />
        <button type="submit">subscribe</button>
      </Form>

      <img src={Fallen} alt="fln" />
    </Container>
  );
}

export default App;
