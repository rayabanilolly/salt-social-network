import { Component, Input } from '@angular/core';

@Component({
  selector: 'sidebar-section',
  templateUrl: './section-sidebar.component.html'
})
export class SidebarSectionComponent {
  @Input() title: String;
  @Input() data;
}
