import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { SaudeIntegralService } from './saude-integral.service';
import { DesenvolvimentoHumanoService } from './desenvolvimento-humano.service';
import { SociedadeService } from './sociedade.service';

import { Post } from 'src/app/shared/models/post.model';

@Component({
  selector: 'app-fique-por-dentro',
  templateUrl: './fique-por-dentro.component.html',
  styleUrls: ['./fique-por-dentro.component.scss']
})
export class FiquePorDentroComponent implements OnInit {

  title: string = '';
  bannerImg: string = '';

  private _posts: Post[] = [];
  private _filteredList: Post[] = [];
  private _lastPost: any;
  private _qtdPages: number = 1;
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private sociedadeService: SociedadeService,
    private saudeIntegralService: SaudeIntegralService,
    private desenvolvimentoHumanoService: DesenvolvimentoHumanoService,
  ) { }

  ngOnInit(): void {

    this.saudeIntegralService.posts = this.activatedRoute.snapshot.data.saudeIntegralPosts.dados;
    this.sociedadeService.posts = this.activatedRoute.snapshot.data.sociedadePosts.dados;
    this.desenvolvimentoHumanoService.posts = this.activatedRoute.snapshot.data.desenvolvimentoHumanoPosts.dados;
    
    const route = this.activatedRoute.snapshot.params.item;

    if (route === 'saude-integral') {
      this.title = "Saúde Integral";
      this.bannerImg = 'assets/banners/saude_integral_banner.jpg';
      this.filteredList = this.posts = this.saudeIntegralService.posts;
      this.qtdPages = this.activatedRoute.snapshot.data.saudeIntegralPosts.quantidadeDePaginas;
    }else if (route === 'desenvolvimento-humano') {
      this.title = "Desenvolvimento Humano";
      this.bannerImg = 'assets/banners/desenvolvimento_humano_banner.jpg';
      this.filteredList = this.posts = this.desenvolvimentoHumanoService.posts;
      this.qtdPages = this.activatedRoute.snapshot.data.desenvolvimentoHumanoPosts.quantidadeDePaginas;
    }else {
      this.title = "Sociedade";
      this.bannerImg = 'assets/banners/sociedade_banner.jpg';
      this.filteredList = this.posts = this.sociedadeService.posts;
      this.qtdPages = this.activatedRoute.snapshot.data.sociedadePosts.quantidadeDePaginas;
    }

    if(this.posts) {
      this.lastPost = this.posts[0];
      this.filteredList = this.posts.filter(post => post.id !== this.lastPost.id);
    }
  }

  public get posts(): Post[] {
    return this._posts;
  }
  public set posts(value: Post[]) {
    this._posts = value;
  }

  public get lastPost(): Post {
    return this._lastPost;
  }
  public set lastPost(value: Post) {
    this._lastPost = value;
  }

  public get qtdPages(): number {
    return this._qtdPages;
  }
  public set qtdPages(value: number) {
    this._qtdPages = value;
  }

  public get filteredList(): Post[] {
    return this._filteredList;
  }
  public set filteredList(value: Post[]) {
    this._filteredList = value;
  }

  callFunction(post: any) {
    return () => {
      this.lastPost = post;
      this.filteredList = this.posts.filter(el => el.id !== post.id);

      window.location.href = `${window.location.pathname}#PostDetail`;
    }
  }

  changePage(data: any) {
    const route = this.activatedRoute.snapshot.params.item;

    if (route === 'saude-integral') {
      this.saudeIntegralService.getPosts(data.currentPage).subscribe((response: any) => {
        this.saudeIntegralService.posts = response.dados;
        this.filteredList = this.posts = response.dados;
        this.qtdPages = response.quantidadeDePaginas;

        if(this.posts) {
          this.lastPost = this.posts[0];
          this.filteredList = this.posts.filter(post => post.id !== this.lastPost.id);
        }
      });
    }else if (route === 'desenvolvimento-humano') {
      this.desenvolvimentoHumanoService.getPosts(data.currentPage).subscribe((response: any) => {
        this.desenvolvimentoHumanoService.posts = response.dados;
        this.filteredList = this.posts = response.dados;
        this.qtdPages = response.quantidadeDePaginas;
        
        if(this.posts) {
          this.lastPost = this.posts[0];
          this.filteredList = this.posts.filter(post => post.id !== this.lastPost.id);
        }
      });
    }else {
      this.sociedadeService.getPosts(data.currentPage).subscribe((response: any) => {
        this.sociedadeService.posts = response.dados;
        this.filteredList = this.posts = response.dados;
        this.qtdPages = response.quantidadeDePaginas;

        if(this.posts) {
          this.lastPost = this.posts[0];
          this.filteredList = this.posts.filter(post => post.id !== this.lastPost.id);
        }
      });
    }
  }
}