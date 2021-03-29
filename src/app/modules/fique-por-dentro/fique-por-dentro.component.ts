import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fique-por-dentro',
  templateUrl: './fique-por-dentro.component.html',
  styleUrls: ['./fique-por-dentro.component.scss']
})
export class FiquePorDentroComponent implements OnInit {

  title: string = '';
  bannerImg: string = '';

  private _posts: any[] = [];
  private _lastPost: any;
  
  constructor(private activatedRoute: ActivatedRoute  ) { }

  ngOnInit(): void {
    const route = this.activatedRoute.snapshot.params.item;
    if(route === 'saude-integral'){
      this.title = "Saúde Integral";
      this.bannerImg = 'assets/banners/saude_integral_banner.jpg';
    }else if(route === 'desenvolvimento-humano'){
      this.title = "Desenvolvimento Humano";
      this.bannerImg = 'assets/banners/desenvolvimento_humano_banner.jpg';
    }else{
      this.title = "Sociedade";
      this.bannerImg = 'assets/banners/sociedade_banner.jpg';
    }

    this.posts = [
      { 
        titulo: 'Lorem ipsumn dolor sit amet, consecutur adipiscing elit.',
        resumo: 'Lorem ipsumn dolor sit amet, consecutur adipiscing elit. Lorem ipsumn dolor sit amet, consecutur adipiscing elit.',
        autor: 'Karina Queiroz',
        dataPost: new Date(2020, 1, 22),
        banner: 'assets/home/noticias/image_placeholder.jpg'
      },
      { 
        titulo: 'Lorem ipsumn dolor sit amet, consecutur adipiscing elit.',
        resumo: 'Lorem ipsumn dolor sit amet, consecutur adipiscing elit. Lorem ipsumn dolor sit amet, consecutur adipiscing elit.',
        autor: 'Karina Queiroz',
        dataPost: new Date(2020, 2, 22),
        banner: 'assets/home/noticias/image_placeholder.jpg'
      },
      { 
        titulo: 'Lorem ipsumn dolor sit amet, consecutur adipiscing elit.',
        resumo: 'Lorem ipsumn dolor sit amet, consecutur adipiscing elit. Lorem ipsumn dolor sit amet, consecutur adipiscing elit.',
        autor: 'Karina Queiroz',
        dataPost: new Date(2020, 3, 22),
        banner: 'assets/home/noticias/image_placeholder.jpg'
      }
    ]

    this.lastPost = this.posts.pop();
  }

  public get posts(): any[] {
    return this._posts;
  }

  public set posts(value: any[]) {
    this._posts = value;
  }

  public get lastPost(): any {
    return this._lastPost;
  }

  public set lastPost(value: any) {
    this._lastPost = value;
  }
}
