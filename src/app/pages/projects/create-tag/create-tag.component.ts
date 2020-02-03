import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ProjectsService } from '../../../services/service.index';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-create-tag',
  templateUrl: './create-tag.component.html',
  styleUrls: ['./create-tag.component.css']
})
export class CreateTagComponent implements OnInit {

  myForm: FormGroup;

  listFrom: String[] = ['Owner', 'Twitter', 'Instagram', 'Facebook']

  // @Output()
  // enviar: EventEmitter<any> = new EventEmitter<any>();

  constructor(public projectService: ProjectsService) { }

  ngOnInit() {
  }

  onSubmit(data: any) {
    // console.log(data.value);
    this.projectService.addTag(data.value);
    data.reset();
  }


}
