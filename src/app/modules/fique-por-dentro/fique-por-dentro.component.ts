import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SaudeIntegralService } from './saude-integral.service';
import { DesenvolvimentoHumanoService } from './desenvolvimento-humano.service';
import { SociedadeService } from './sociedade.service';

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
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private sociedadeService: SociedadeService,
    private saudeIntegralService: SaudeIntegralService,
    private desenvolvimentoHumanoService: DesenvolvimentoHumanoService,
  ) { }

  ngOnInit(): void {
    const route = this.activatedRoute.snapshot.params.item;
    if (route === 'saude-integral') {
      this.title = "Saúde Integral";
      this.bannerImg = 'assets/banners/saude_integral_banner.jpg';
      this.posts = this.saudeIntegralService.posts;
    }else if (route === 'desenvolvimento-humano') {
      this.title = "Desenvolvimento Humano";
      this.bannerImg = 'assets/banners/desenvolvimento_humano_banner.jpg';
      this.posts = this.desenvolvimentoHumanoService.posts;
    }else {
      this.title = "Sociedade";
      this.bannerImg = 'assets/banners/sociedade_banner.jpg';
      this.posts = this.sociedadeService.posts;
    }

    this.lastPost = this.posts? this.posts[0] : null;
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

  callFunction(post: any) {
    return () => {
      this.lastPost = post;
      window.location.href = `${window.location.pathname}#PostDetail`;
    }
  }
}
