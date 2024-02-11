import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Services/data.service';
import { ValuesService } from '../../Services/values.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IOptions } from '../../Interfaces/IOptions';
import { IConfigs } from '../../Interfaces/IConfigs';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-step-2',
  standalone: true,
  imports: [ReactiveFormsModule, CurrencyPipe],
  templateUrl: './step2.component.html',
  styleUrl: './step2.component.scss',
})
export class Step2Component implements OnInit {
  options!: IOptions;
  config!: IConfigs;
  carForm = new FormGroup({
    config: new FormControl(0),
    towHitch: new FormControl(false),
    yoke: new FormControl(false),
  });

  constructor(
    private dataService: DataService,
    private valuesService: ValuesService
  ) {}

  ngOnInit(): void {
    this.valuesService.config && this.valuesService.config.description.length
      ? this.checkValues()
      : this.getOptions();
  }

  public checkValues() {
    this.dataService
      .getOptions(this.valuesService.model || 'C')
      .subscribe((res) => {
        this.options = res;
        this.config = this.valuesService.config;
        this.carForm.controls.config.setValue(this.valuesService.config.id);
        this.carForm.controls.towHitch.setValue(this.valuesService.towHitch);
        this.carForm.controls.yoke.setValue(this.valuesService.yoke);
      });
  }

  public getOptions() {
    this.dataService
      .getOptions(this.valuesService.model || 'C')
      .subscribe((res) => {
        this.options = res;
      });
  }

  public setConfig() {
    const selectedConfig = this.options.configs.findIndex(
      (config) => config.id == this.carForm.value.config
    );
    this.valuesService.config = this.options.configs[selectedConfig];
    this.config = this.options.configs[selectedConfig];
  }

  public setTowHitch(e: Event) {
    const towHitch = (e.target as HTMLInputElement).checked;
    this.valuesService.towHitch = towHitch ?? false;
  }

  public setYoke(e: Event) {
    const yoke = (e.target as HTMLInputElement).checked;
    this.valuesService.yoke = yoke ?? false;
  }
}
