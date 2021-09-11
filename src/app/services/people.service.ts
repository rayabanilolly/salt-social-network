import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PeopleService {
  constructor(private http: HttpClient) {}

  getPeoples() {
    return this.http.get('/assets/peoples.json');
  }
}
