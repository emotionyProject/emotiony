import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/service.index';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(public modalService: ModalService) { }

  ngOnInit() {
  }

  onSubmit(data: any) {
    if (data.invalid) {
      return;
    }
    console.log('data', data);
  }

}
