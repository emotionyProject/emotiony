import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/service.index';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public modalService: ModalService) { }

  ngOnInit() {
  }

  activar(accion: string) {
      this.modalService.modModal(accion);
      console.log(this.modalService.getLogin());
  }

}
