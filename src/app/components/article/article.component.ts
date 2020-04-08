import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor(private articleService: ArticleService, private router: ActivatedRoute) { }

  public articleInfo

  ngOnInit(): void {

    this.articleService.getArticles().subscribe(data => {
      let id = parseInt(this.router.snapshot.paramMap.get('id'))
      this.articleInfo = data.find(article => article.id == id)  
    })
  }

}
