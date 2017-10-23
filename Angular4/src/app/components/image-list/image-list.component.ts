import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../../services/images.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {

  images: any[];
  searching:boolean = false;
  title = 'Image Search';
  imagesFound:boolean = false;
  constructor(private _imagesService: ImagesService) {}

  ngOnInit() {
  }

  searchImages(query){
    this.searching = true;
    this._imagesService.getImages(query)
      .subscribe(
        data => {
          this.imagesFound = true;
          this.images = data.hits;
        },
        Error => console.log(Error),
        () => this.searching = false
      );
  }

}