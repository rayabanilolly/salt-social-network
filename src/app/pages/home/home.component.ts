import { Component } from '@angular/core';
import { faArrowUp, faComment } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html'
})
export class HomePageComponent {
  icons = {
    arrowUp: faArrowUp,
    comment: faComment
  };

  constructor() {
    console.log('tes lohee');
  }
}
