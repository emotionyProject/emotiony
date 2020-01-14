import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  login: boolean = false;
  about: boolean = false;
  contact: boolean = false;

  constructor() { }

  modModal(accion: string) {

    if (accion === 'login' && !this.login) {
      this.about = false;
      this.contact = false;
      this.login = true;
    } else if (accion === 'about' && !this.about) {
      this.about = true;
      this.contact = false;
      this.login = false;
    } else if (accion === 'contact' && !this.contact) {
      this.about = false;
      this.contact = true;
      this.login = false;
    }
  }

  getLogin(): boolean {
    return this.login;
  }

  getAbout(): boolean {
    return this.about;
  }

  getContact(): boolean {
    return this.contact;
  }
}
