import { Component, Input } from '@angular/core';

@Component({
  selector: 'main-section',
  templateUrl: './section-main.component.html'
})
export class MainSectionComponent {
  @Input() title: String;
  @Input() data;
}
