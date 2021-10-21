import IFallenObserver from "../interfaces/IFallenObserver";
import Message from "./Message";

import { Container } from "./styles";

interface TimelineProps {
  observer: IFallenObserver;
}

const Timeline = ({ observer }: TimelineProps) => {
  return (
    <Container>
      <b>Timeline of:</b> {observer.getName()}
      {observer.getTimeline().map(({ id, message }) => (
        <Message key={id} id={id} message={message} />
      ))}
    </Container>
  );
};

export default Timeline;
