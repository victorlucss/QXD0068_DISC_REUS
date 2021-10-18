import IMessage from "../interfaces/IMessage";
import ISubject from "../interfaces/ISubject";
import Observer from "./Observer.class";

export default class Fallen implements ISubject {
  public observers: Observer[] = []

  attach(observer: Observer): void {
    this.observers = [
      observer,
      ...this.observers
    ]
    console.log(this.observers)
  }

  detach(observer: Observer): void {
    this.observers = this.observers.filter((obs) => obs.name !== observer.name)
  }

  notify(message: IMessage): void {
    this.observers.forEach(obs => obs.update(message))
  }
}