import { NgClass, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IHeaderItem } from '../../Interfaces/IHeaderItem';
import { ValuesService } from '../../Services/values.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, UpperCasePipe, NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  headerItems: IHeaderItem[] = [
    { title: 'Step 1', route: 'Step-1', isEnable: true },
    { title: 'Step 2', route: 'Step-2', isEnable: false },
    { title: 'Step 3', route: 'Step-3', isEnable: false },
  ];

  constructor(private valuesService: ValuesService) {}
  ngOnInit(): void {}

  public checkCursor() {
    if (this.valuesService.model.length && this.valuesService.color.length) {
      this.headerItems[1].isEnable = true;
      if (
        this.valuesService.config &&
        this.valuesService.config.description.length
      ) {
        this.headerItems[2].isEnable = true;
      } else {
        this.headerItems[2].isEnable = false;
      }
    } else {
      this.headerItems[1].isEnable = false;
      this.headerItems[2].isEnable = false;
    }
  }
}
