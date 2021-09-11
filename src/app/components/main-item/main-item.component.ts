import { Component, Input } from '@angular/core';

@Component({
  selector: 'main-item',
  templateUrl: './main-item.component.html'
})
export class MainItemComponent {
  @Input() title: String;
  @Input() primary: String;
  @Input() secondary: String;
  @Input() tertiary: String;
}
