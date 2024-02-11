import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Shared/header/header.component';
import { ImageComponent } from './Shared/image/image.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ImageComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'tesla-configurator';
}
