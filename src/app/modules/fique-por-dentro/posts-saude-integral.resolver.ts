import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { SaudeIntegralService } from './saude-integral.service';

@Injectable({
  providedIn: 'root'
})
export class PostsSaudeIntegralResolver implements Resolve<any> {

  constructor(
    private saudeIntegralService: SaudeIntegralService
  ) { }

  resolve() {
    return this.saudeIntegralService.getPosts(1);
  }
}
