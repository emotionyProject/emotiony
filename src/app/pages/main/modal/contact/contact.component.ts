import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../../../services/service.index';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(public modalService: ModalService) { }

  ngOnInit() {
  }

}
