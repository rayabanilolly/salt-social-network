import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class VideoService {
  constructor(private http: HttpClient) {}

  getVideos() {
    return this.http.get('/assets/videos.json');
  }
}
