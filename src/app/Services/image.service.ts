import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  constructor() {}

  baseURL: string = 'https://interstate21.com/tesla-app/images/';
  image = new Subject<string>();

  public setImage(src: string) {
    if (src.length) {
      this.image.next(this.baseURL + src);
    } else {
      this.image.next('');
    }
  }
}
