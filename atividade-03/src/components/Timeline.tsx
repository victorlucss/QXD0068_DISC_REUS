import IFallenObserver from "../interfaces/IFallenObserver";
import Message from "./Message";

interface TimelineProps {
  observer: IFallenObserver
};

const Timeline = ({ observer }: TimelineProps) => {
  return (
    <div>
      Timeline of: {observer.getName()}
      {observer.getTimeline().map(({ id, message}) => <Message key={id} id={id} message={message} />)}
    </div>
  )
}

export default Timeline;