import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private article: ArticleService,private router: Router) { }

  public articles = []

  ngOnInit(): void {
    this.article.getArticles().subscribe(data => {
      this.articles = data
    })

  }

  redirectToArticle(id): void {
    this.router.navigate(["article",id])



  }

}
