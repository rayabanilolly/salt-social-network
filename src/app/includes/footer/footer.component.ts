import { Component } from '@angular/core';
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'include-footer',
  templateUrl: './footer.component.html'
})
export class FooterIncludeComponent {
  icons = {
    twitter: faTwitter,
    facebook: faFacebookF,
    linkedin: faLinkedinIn
  };
}
