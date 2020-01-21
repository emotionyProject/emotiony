import { Component, OnInit } from '@angular/core';
import { ModalService, UserService } from '../../../../services/service.index';
import { Router } from '@angular/router';
import { User } from '../../../../models/user.model';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(
    public router: Router,
    public userService: UserService,
    public modalService: ModalService) { }

  ngOnInit() {
  }

  onSubmit(data: any) {
    if (data.invalid) {
      return;
    }

    let user = new User(data.email, data.password);
    console.log('User', user);
    if (this.userService.login(user)) {
      this.router.navigate(['/grafica']);
    } else {
      Swal.fire('Usuario incorrecto', `El usuario ${user.email} o la contraseña són incorrectas` , 'error')
      console.log('utiliza admin como contraseña');
    }
  }

}
