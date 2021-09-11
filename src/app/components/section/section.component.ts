import { Component, Input } from '@angular/core';

@Component({
  selector: 'main-section',
  templateUrl: './section.component.html'
})
export class MainSectionComponent {
  @Input() title: String;
  @Input() data;
}