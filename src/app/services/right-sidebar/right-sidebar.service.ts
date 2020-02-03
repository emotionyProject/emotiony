import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RightSidebarService {

  location: boolean = false;
  language: boolean = false;
  hashtag: boolean = false;

  constructor() { }

  isVisible(): boolean {
    return this.location || this.language || this.hashtag;
  }
  
}
