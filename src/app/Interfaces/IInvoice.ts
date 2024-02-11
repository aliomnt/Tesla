import { Signal } from '@angular/core';

export interface IInvoice {
  title: string;
  price: Signal<number>;
  state: boolean;
  range?: number;
  speed?: number;
}
