import { Component, OnInit } from '@angular/core';
import { RightSidebarService } from '../../services/service.index';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(public rightSidebarService: RightSidebarService) {
    document.body.style.background = 'white';
  }

  ngOnInit() {
  }

}
