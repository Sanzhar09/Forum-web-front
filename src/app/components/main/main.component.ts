import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private article: ArticleService) { }

  public articles = []

  ngOnInit(): void {
    this.article.getArticles().subscribe(data => {
      this.articles = data
    })
  }

}
