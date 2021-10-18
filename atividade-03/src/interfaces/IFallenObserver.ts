import IMessage from "./IMessage";
import IObserver from "./IObserver";

export default interface IFallenObserver extends IObserver {
  getTimeline(): IMessage[];
  getName(): string;
};