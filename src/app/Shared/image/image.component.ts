import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../Services/image.service';

@Component({
  selector: 'app-image',
  standalone: true,
  imports: [],
  templateUrl: './image.component.html',
  styleUrl: './image.component.scss',
})
export class ImageComponent implements OnInit {
  imageSrc: string = '';
  constructor(private imageService: ImageService) {}
  ngOnInit(): void {
    this.imageService.image.subscribe((res) => {
      this.imageSrc = res;
    });
  }
}
