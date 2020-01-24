import { Component, OnInit } from '@angular/core';
import { EmotioniesService } from '../../../services/service.index';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  constructor(public emotioniesService: EmotioniesService) { }

  ngOnInit() {
  }

  findData(value){
    if(value != '' && value != null){
      this.emotioniesService.setPosition(parseInt(value));
    }
  }

}
