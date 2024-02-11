import { Injectable } from '@angular/core';
import { IConfigs } from '../Interfaces/IConfigs';
import { IOptions } from '../Interfaces/IOptions';

@Injectable({
  providedIn: 'root',
})
export class ValuesService {
  model: string = '';
  color: string = '';
  colorDescription: string = '';
  colorPrice: number = 0;
  options!: IOptions;
  config!: IConfigs;
  towHitch: boolean = false;
  yoke: boolean = false;

  constructor() {}

  public resetValue() {
    this.color = '';
    this.colorPrice = 0;
    this.options = { configs: [], towHitch: false, yoke: false };
    this.config = { id: 0, description: '', range: 0, speed: 0, price: 0 };
    this.towHitch = false;
    this.yoke = false;
  }
}
