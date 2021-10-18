import IMessage from "../interfaces/IMessage";
import IObserver from "../interfaces/IObserver";

export default class Observer implements IObserver {
  constructor(public readonly name: string) {}
  private timeline: IMessage[] = [];

  update(message: IMessage): void {
    this.timeline.push(message);
  }

  getTimeline(): IMessage[] {
    return this.timeline;
  }

  getName(): string {
    return this.name
  }
}