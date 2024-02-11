import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Services/data.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ImageService } from '../../Services/image.service';
import { ValuesService } from '../../Services/values.service';
import { IModels } from '../../Interfaces/IModels';
import { IColors } from '../../Interfaces/IColors';

@Component({
  selector: 'app-step-1',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './step1.component.html',
  styleUrl: './step1.component.scss',
})
export class Step1Component implements OnInit {
  models!: IModels[];
  colors!: IColors[];

  carForm = new FormGroup({
    model: new FormControl(''),
    color: new FormControl('', { nonNullable: true }),
  });

  constructor(
    private dataService: DataService,
    private valuesService: ValuesService,
    private imageService: ImageService
  ) {}
  ngOnInit(): void {
    this.valuesService.model.length && this.valuesService.color.length
      ? this.checkValues()
      : this.getModel();
  }

  public checkValues() {
    const modelValue = this.valuesService.model;
    const colorValue = this.valuesService.color;
    this.dataService.getModel().subscribe((res) => {
      this.models = res;
      this.carForm.controls.model.setValue(modelValue);
      this.getColor();
      this.carForm.controls.color.setValue(colorValue);
    });
  }

  public getModel() {
    this.dataService.getModel().subscribe((res) => {
      this.models = res;
    });
  }

  public getColor() {
    const selectedCar = this.models.findIndex(
      (car) => car.code == this.carForm.value.model
    );
    this.colors = this.models[selectedCar].colors;
    this.carForm.controls.color.reset();
  }

  public setValues() {
    const modelValue: string = this.carForm.value.model ?? '';
    const colorValue: string = this.carForm.value.color ?? '';

    if (modelValue.length && colorValue.length) {
      const selectedColor: IColors = this.colors.filter(
        (color) => color.code == colorValue
      )[0];

      this.imageService.setImage(`${modelValue}/${colorValue}.jpg`);
      this.valuesService.model = modelValue;
      this.valuesService.color = colorValue;
      this.valuesService.colorDescription = selectedColor.description;
      this.valuesService.colorPrice = selectedColor.price;
    } else {
      this.imageService.setImage('');
      this.valuesService.color = '';
      this.valuesService.model = '';
      this.valuesService.colorPrice = 0;
    }
  }

  public resetValue() {
    this.valuesService.resetValue();
  }
}
