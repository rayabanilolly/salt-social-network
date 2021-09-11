import { Component, Input } from '@angular/core';

@Component({
  selector: 'channel-item',
  templateUrl: './channel-item.component.html'
})
export class ChannelItemComponent {
  @Input() data;
}
