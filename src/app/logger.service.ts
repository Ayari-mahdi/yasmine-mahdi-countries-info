import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  logger(todos: any) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
