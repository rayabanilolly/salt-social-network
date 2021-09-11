import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DocumentService {
  constructor(private http: HttpClient) {}

  getDocuments() {
    return this.http.get('/assets/documents.json');
  }
}
