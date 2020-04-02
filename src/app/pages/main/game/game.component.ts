import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

/*import * as UnityProgress from '../../../../assets/Unity/TemplateData/UnityProgress.js';
import * as UnityLoader from '../../../../assets/Unity/Build/UnityLoader.js';*/

/*<script src="TemplateData/UnityProgress.js"></script>
<script src="Build/UnityLoader.js"></script>*/

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  @Input()
  url: string;
  urlSafe: SafeResourceUrl;

  constructor(public sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    //console.log(this.url);
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    //this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl('http://inspirat.ddns.net/webgl/Webgl241/');
  }

}

