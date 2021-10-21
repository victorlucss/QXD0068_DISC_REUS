import { Form, Container, Content, Observers } from "./style";
import Fallenimg from "../images/fallen.jpg";
import Fallen from "../classes/Fallen.class";
import Observer from "../classes/Observer.class";
import Timeline from "../components/Timeline";
import { useState } from "react";
import { useCallback } from "react";

const Home: React.FC = () => {
  const [fallenNotifier] = useState(new Fallen());

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [time, setTime] = useState<number>(0);

  // FallenNotifier.notify({
  //   id: new Date().getTime(),
  //   message: '[New Email] Fallen just droped new shop'
  // })
  // first.getTimeline().map(({ id }) => console.log(`Message ${id} sended`))

  const onSubscribe = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    let observer = new Observer(name);
    fallenNotifier.attach(observer);
    setName("");
  };

  const onNotify = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    fallenNotifier.notify({
      id: new Date().getTime(),
      message: message,
    });
    setTime(new Date().getTime());
    setMessage("");
  };

  const observers = useCallback(() => {
    return fallenNotifier.observers.map((observer) => (
      <Timeline key={observer.name} observer={observer} />
    ));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [time]);

  return (
    <Container>
      <Content>
        <span>subscribe for receive fallen notices</span>

        <Form onSubmit={(ev) => onSubscribe(ev)}>
          <input
            placeholder="name"
            value={name}
            onChange={(evt) => setName(evt.target.value)}
          />
          <button type="submit">subscribe</button>
        </Form>

        <Form onSubmit={(ev) => onNotify(ev)}>
          <input
            placeholder="message"
            value={message}
            onChange={(evt) => setMessage(evt.target.value)}
          />
          <button type="submit">notify</button>
        </Form>

        <img src={Fallenimg} alt="fln" />
      </Content>
      <Observers>{observers()}</Observers>
    </Container>
  );
};

export default Home;
