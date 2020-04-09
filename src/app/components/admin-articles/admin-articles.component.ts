import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-admin-articles',
  templateUrl: './admin-articles.component.html',
  styleUrls: ['./admin-articles.component.css']
})
export class AdminArticlesComponent implements OnInit {

  constructor(private articleService: ArticleService) { }

  public articles = []

  ngOnInit(): void {
    this.articleService.getArticles().subscribe(data => {
      this.articles = data
    })
  }

  onDelete(id): void {
    console.log(id)
    this.articleService.delete(id)
  }

}
