import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

  private _messages: string[] = [];

  constructor() { }

  add(msg): void {
    this._messages.push(msg);
  }

  clear(): void {
    this._messages = [];
  }

  get messages(): string[] {
    return this._messages;
  }

}
