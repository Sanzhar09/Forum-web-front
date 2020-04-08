import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Article } from '../interfaces/Article'

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  constructor(private http: HttpClient) { }

  private _url = "assets/data/articles.json"

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this._url)
  }

  
}
