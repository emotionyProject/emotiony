import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../../services/service.index';
import { Tag } from '../../../models/tag.model';

@Component({
  selector: 'app-list-tags',
  templateUrl: './list-tags.component.html',
  styleUrls: ['./list-tags.component.css']
})
export class ListTagsComponent implements OnInit {

  constructor(public projectService: ProjectsService) { }

  ngOnInit() {
  }

  editTag(tag: Tag){
    this.projectService.editarTag(tag);
  }

}
