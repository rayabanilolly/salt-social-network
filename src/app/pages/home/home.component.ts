import { Component } from '@angular/core';
import { faArrowUp, faComment } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { VideoService } from '../../services/video.service';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html'
})
export class HomePageComponent {
  icons = {
    arrowUp: faArrowUp,
    comment: faComment
  };

  scrolled: Boolean = false;

  videos$: Observable<Array<any>>;

  constructor(private videoService: VideoService) {}

  ngOnInit() {
    this.videos$ = this.videoService.getVideos();
  }

  onScroll(e) {
    console.log(e.target.scrollTop);
    return e.target.scrollTop > 120
      ? (this.scrolled = true)
      : (this.scrolled = false);
  }
}
