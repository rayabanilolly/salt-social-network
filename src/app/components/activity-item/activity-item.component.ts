import { Component, Input } from '@angular/core';
import { faComment, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'activity-item',
  templateUrl: './activity-item.component.html'
})
export class ActivityItemComponent {
  @Input() title: String;
  @Input() data;

  icons = {
    comment: faComment,
    time: faTimes
  };
}
