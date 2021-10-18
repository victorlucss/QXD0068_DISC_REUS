import IMessage from "./IMessage";

export default interface IObserver {
  update(message: IMessage): void;
}