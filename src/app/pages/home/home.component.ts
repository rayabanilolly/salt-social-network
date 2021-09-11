import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { faArrowUp, faComment } from '@fortawesome/free-solid-svg-icons';

import { DocumentService } from '../../services/documents.service';
import { PeopleService } from '../../services/people.service';
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
  peoples$: Observable<Array<any>>;
  documents$: Observable<Array<any>>;

  constructor(
    private videoService: VideoService,
    private peopleService: PeopleService,
    private documentService: DocumentService
  ) {}

  ngOnInit() {
    this.videos$ = this.videoService.getVideos();
    this.peoples$ = this.peopleService.getPeoples();
    this.documents$ = this.documentService.getDocuments();
  }

  onScroll(e) {
    console.log(e.target.scrollTop);
    return e.target.scrollTop > 120
      ? (this.scrolled = true)
      : (this.scrolled = false);
  }
}
