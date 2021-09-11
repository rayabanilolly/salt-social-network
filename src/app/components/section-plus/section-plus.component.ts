import { Component, Input } from '@angular/core';
import {
  faArrowUp,
  faDotCircle,
  faPlus
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'main-section-plus',
  templateUrl: './section-plus.component.html',
  styleUrls: ['./section-plus.scss']
})
export class MainSectionPlusComponent {
  @Input() title: String;
  @Input() icon: String;

  icons = {
    arrowUp: faArrowUp,
    dotCircle: faDotCircle,
    plus: faPlus
  };
}
