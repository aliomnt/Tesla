import { Component, OnInit, computed, signal } from '@angular/core';
import { ValuesService } from '../../Services/values.service';
import { CurrencyPipe } from '@angular/common';
import { IInvoice } from '../../Interfaces/IInvoice';

@Component({
  selector: 'app-step-3',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './step3.component.html',
  styleUrl: './step3.component.scss',
})
export class Step3Component implements OnInit {
  invoice!: IInvoice[];
  carName!: string;

  constructor(private valuesService: ValuesService) {}

  ngOnInit(): void {
    this.setValue();
  }

  public setValue() {
    this.carName = this.valuesService.name;
    this.invoice = [
      {
        title: this.valuesService.config?.description,
        price: signal(this.valuesService.config?.price),
        state: true,
        range: this.valuesService.config?.range,
        speed: this.valuesService.config?.speed,
      },
      {
        title: this.valuesService.colorDescription,
        price: signal(this.valuesService.colorPrice),
        state: true,
      },
      {
        title: 'Tow Hitch Package',
        price: signal(this.valuesService.towHitch ? 1000 : 0),
        state: this.valuesService.towHitch,
      },
      {
        title: 'Yok Steering Wheel',
        price: signal(this.valuesService.yoke ? 1000 : 0),
        state: this.valuesService.yoke,
      },
      {
        title: 'TOTAL COST',
        price: computed(
          () =>
            this.invoice[0].price() +
            this.invoice[1].price() +
            this.invoice[2].price() +
            this.invoice[3].price()
        ),
        state: true,
      },
    ];
  }
}
