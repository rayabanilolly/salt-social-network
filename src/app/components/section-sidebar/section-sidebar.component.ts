import { Component, Input } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'sidebar-section',
  templateUrl: './section-sidebar.component.html'
})
export class SidebarSectionComponent {
  @Input() title: String;
  @Input() data;
  @Input() scrolled: Boolean;

  icons = {
    plus: faPlus
  };
}
