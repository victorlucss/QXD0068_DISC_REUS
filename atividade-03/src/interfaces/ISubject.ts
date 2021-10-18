import IMessage from "./IMessage";
import IObserver from "./IObserver";

export default interface Subject {
  attach(observer: IObserver): void;
  detach(observer: IObserver): void;
  notify(message: IMessage): void;
}
