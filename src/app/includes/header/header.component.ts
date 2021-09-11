import { Component } from '@angular/core';
import { faArrowUp, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'include-header',
  templateUrl: './header.component.html'
})
export class HeaderIncludeComponent {
  icons = {
    search: faSearch,
    arrowUp: faArrowUp,
    user: faUser
  };
}
