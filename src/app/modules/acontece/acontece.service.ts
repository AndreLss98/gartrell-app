import { of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AconteceService {

  private _eventos: any[] = [
    {
      id: 1,
      dia: 18,
      mes: 'Novemnbro',
      titulo: 'IV Jornada de Saúde Mental',
      resumo: 'Pandemia Global e Fé Crisã',
      descricao: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis luctus lorem, at hendrerit turpis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur finibus, lectus vel cursus blandit, augue tellus dictum quam, eget porttitor est nulla vel ligula. Suspendisse non magna at dolor dapibus fermentum. Sed a maximus ante. Fusce volutpat, augue nec aliquet luctus, mauris sem vestibulum nulla, et sollicitudin quam dolor ut metus. Suspendisse et odio imperdiet, luctus turpis feugiat, accumsan quam.
      Maecenas faucibus auctor mi quis pretium. Aliquam vitae viverra augue. Etiam cursus, libero sit amet tempor scelerisque, quam velit tempus dui, id dapibus velit ligula vel eros. Duis eleifend dapibus nulla quis blandit. Nulla at metus velit. Integer porttitor sem quis augue pulvinar fermentum. Mauris non gravida nulla. Mauris dapibus sollicitudin lacus, id placerat ex sollicitudin a. Integer eget scelerisque magna. Fusce sodales, elit at sagittis sodales, eros libero sollicitudin dui, nec efficitur ex velit ac magna. Nam finibus turpis leo, vulputate pellentesque nisi hendrerit ut.
      In dapibus viverra ligula. Aenean dictum imperdiet orci quis dapibus. Integer vulputate scelerisque aliquet. Praesent semper ligula felis, a suscipit lacus pulvinar a. Integer eget quam consequat magna volutpat malesuada. Donec sed posuere nulla, in luctus arcu. In vel sem elementum, interdum nisl at, hendrerit magna.      
      Suspendisse mattis neque et elit convallis, eu hendrerit orci maximus. Ut luctus turpis a turpis vehicula convallis. Pellentesque eu lacus risus. Sed rutrum nec nulla sed tincidunt. Sed placerat metus sit amet tincidunt posuere. Integer non pharetra nisi, in iaculis mi. Pellentesque eget nisi tortor. Donec venenatis velit at vehicula dignissim. Quisque cursus eros sit amet ipsum ullamcorper bibendum. Fusce id vestibulum lacus. Vivamus sit amet tortor velit. Aenean pretium dui nec pulvinar ullamcorper. Etiam ac odio eleifend, sodales quam nec, semper erat. Sed volutpat lacus eu ante molestie mollis.
      Vestibulum condimentum sed tellus non egestas. Etiam tincidunt rhoncus tortor, eget maximus magna auctor quis. Vivamus et volutpat velit. Cras vel tempor orci. Phasellus ultricies risus luctus tellus condimentum, sollicitudin euismod elit vulputate. Donec vitae magna dolor. Aenean a tempus neque. In consectetur, ante ac auctor sodales, ex orci venenatis massa, fringilla consectetur turpis diam id nunc. Fusce gravida maximus faucibus. Fusce a lectus et erat bibendum consectetur quis vitae velit. Etiam commodo maximus tortor, vel luctus lectus scelerisque id.`,
      banner: 'assets/home/evento/evento_banner.jpg',
      palestrantes: [
        {
          nome: 'Nome Sobrenome Aqui',
          self: 'assets/home/equipe/eliane_dias_da_paixao.jpg',
          cargo: 'Psicóloga',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tristique tincidunt odio, id tempus libero euismod eu. Suspendisse at efficitur neque. Etiam dignissim ultrices lacus, quis tristique orci tincidunt eu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis pellentesque odio sed leo laoreet vehicula vel a nunc. Morbi id gravida erat, at sagittis felis. Proin id tincidunt ipsum, non aliquam nibh.',
          dataPalestra: new Date()
        }
      ]
    },
    {
      id: 2,
      dia: 25,
      mes: 'Dezembro',
      titulo: 'Nome do Evento aqui!',
      resumo: 'Descrição do evento aqui.',
      descricao: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis luctus lorem, at hendrerit turpis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur finibus, lectus vel cursus blandit, augue tellus dictum quam, eget porttitor est nulla vel ligula. Suspendisse non magna at dolor dapibus fermentum. Sed a maximus ante. Fusce volutpat, augue nec aliquet luctus, mauris sem vestibulum nulla, et sollicitudin quam dolor ut metus. Suspendisse et odio imperdiet, luctus turpis feugiat, accumsan quam.
      Maecenas faucibus auctor mi quis pretium. Aliquam vitae viverra augue. Etiam cursus, libero sit amet tempor scelerisque, quam velit tempus dui, id dapibus velit ligula vel eros. Duis eleifend dapibus nulla quis blandit. Nulla at metus velit. Integer porttitor sem quis augue pulvinar fermentum. Mauris non gravida nulla. Mauris dapibus sollicitudin lacus, id placerat ex sollicitudin a. Integer eget scelerisque magna. Fusce sodales, elit at sagittis sodales, eros libero sollicitudin dui, nec efficitur ex velit ac magna. Nam finibus turpis leo, vulputate pellentesque nisi hendrerit ut.
      In dapibus viverra ligula. Aenean dictum imperdiet orci quis dapibus. Integer vulputate scelerisque aliquet. Praesent semper ligula felis, a suscipit lacus pulvinar a. Integer eget quam consequat magna volutpat malesuada. Donec sed posuere nulla, in luctus arcu. In vel sem elementum, interdum nisl at, hendrerit magna.      
      Suspendisse mattis neque et elit convallis, eu hendrerit orci maximus. Ut luctus turpis a turpis vehicula convallis. Pellentesque eu lacus risus. Sed rutrum nec nulla sed tincidunt. Sed placerat metus sit amet tincidunt posuere. Integer non pharetra nisi, in iaculis mi. Pellentesque eget nisi tortor. Donec venenatis velit at vehicula dignissim. Quisque cursus eros sit amet ipsum ullamcorper bibendum. Fusce id vestibulum lacus. Vivamus sit amet tortor velit. Aenean pretium dui nec pulvinar ullamcorper. Etiam ac odio eleifend, sodales quam nec, semper erat. Sed volutpat lacus eu ante molestie mollis.
      Vestibulum condimentum sed tellus non egestas. Etiam tincidunt rhoncus tortor, eget maximus magna auctor quis. Vivamus et volutpat velit. Cras vel tempor orci. Phasellus ultricies risus luctus tellus condimentum, sollicitudin euismod elit vulputate. Donec vitae magna dolor. Aenean a tempus neque. In consectetur, ante ac auctor sodales, ex orci venenatis massa, fringilla consectetur turpis diam id nunc. Fusce gravida maximus faucibus. Fusce a lectus et erat bibendum consectetur quis vitae velit. Etiam commodo maximus tortor, vel luctus lectus scelerisque id.`,
      banner: 'assets/home/evento/evento_banner.jpg',
      palestrantes: [
        {
          nome: 'Nome Sobrenome Aqui',
          self: 'assets/home/equipe/eliane_dias_da_paixao.jpg',
          cargo: 'Psicóloga',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tristique tincidunt odio, id tempus libero euismod eu. Suspendisse at efficitur neque. Etiam dignissim ultrices lacus, quis tristique orci tincidunt eu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis pellentesque odio sed leo laoreet vehicula vel a nunc. Morbi id gravida erat, at sagittis felis. Proin id tincidunt ipsum, non aliquam nibh.',
          dataPalestra: new Date()
        }
      ]
    },
    {
      id: 3,
      dia: 27,
      mes: 'Dezembro',
      titulo: 'Nome do Evento aqui!',
      resumo: 'Descrição do evento aqui.',
      descricao: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis luctus lorem, at hendrerit turpis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur finibus, lectus vel cursus blandit, augue tellus dictum quam, eget porttitor est nulla vel ligula. Suspendisse non magna at dolor dapibus fermentum. Sed a maximus ante. Fusce volutpat, augue nec aliquet luctus, mauris sem vestibulum nulla, et sollicitudin quam dolor ut metus. Suspendisse et odio imperdiet, luctus turpis feugiat, accumsan quam.
      Maecenas faucibus auctor mi quis pretium. Aliquam vitae viverra augue. Etiam cursus, libero sit amet tempor scelerisque, quam velit tempus dui, id dapibus velit ligula vel eros. Duis eleifend dapibus nulla quis blandit. Nulla at metus velit. Integer porttitor sem quis augue pulvinar fermentum. Mauris non gravida nulla. Mauris dapibus sollicitudin lacus, id placerat ex sollicitudin a. Integer eget scelerisque magna. Fusce sodales, elit at sagittis sodales, eros libero sollicitudin dui, nec efficitur ex velit ac magna. Nam finibus turpis leo, vulputate pellentesque nisi hendrerit ut.
      In dapibus viverra ligula. Aenean dictum imperdiet orci quis dapibus. Integer vulputate scelerisque aliquet. Praesent semper ligula felis, a suscipit lacus pulvinar a. Integer eget quam consequat magna volutpat malesuada. Donec sed posuere nulla, in luctus arcu. In vel sem elementum, interdum nisl at, hendrerit magna.      
      Suspendisse mattis neque et elit convallis, eu hendrerit orci maximus. Ut luctus turpis a turpis vehicula convallis. Pellentesque eu lacus risus. Sed rutrum nec nulla sed tincidunt. Sed placerat metus sit amet tincidunt posuere. Integer non pharetra nisi, in iaculis mi. Pellentesque eget nisi tortor. Donec venenatis velit at vehicula dignissim. Quisque cursus eros sit amet ipsum ullamcorper bibendum. Fusce id vestibulum lacus. Vivamus sit amet tortor velit. Aenean pretium dui nec pulvinar ullamcorper. Etiam ac odio eleifend, sodales quam nec, semper erat. Sed volutpat lacus eu ante molestie mollis.
      Vestibulum condimentum sed tellus non egestas. Etiam tincidunt rhoncus tortor, eget maximus magna auctor quis. Vivamus et volutpat velit. Cras vel tempor orci. Phasellus ultricies risus luctus tellus condimentum, sollicitudin euismod elit vulputate. Donec vitae magna dolor. Aenean a tempus neque. In consectetur, ante ac auctor sodales, ex orci venenatis massa, fringilla consectetur turpis diam id nunc. Fusce gravida maximus faucibus. Fusce a lectus et erat bibendum consectetur quis vitae velit. Etiam commodo maximus tortor, vel luctus lectus scelerisque id.`,
      banner: 'assets/home/evento/evento_banner.jpg',
      palestrantes: [
        {
          nome: 'Nome Sobrenome Aqui',
          self: 'assets/home/equipe/eliane_dias_da_paixao.jpg',
          cargo: 'Psicóloga',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tristique tincidunt odio, id tempus libero euismod eu. Suspendisse at efficitur neque. Etiam dignissim ultrices lacus, quis tristique orci tincidunt eu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis pellentesque odio sed leo laoreet vehicula vel a nunc. Morbi id gravida erat, at sagittis felis. Proin id tincidunt ipsum, non aliquam nibh.',
          dataPalestra: new Date()
        }
      ]
    },
    {
      id: 4,
      dia: 31,
      mes: 'Dezembro',
      titulo: 'Nome do Evento aqui!',
      resumo: 'Descrição do evento aqui.',
      descricao: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis luctus lorem, at hendrerit turpis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur finibus, lectus vel cursus blandit, augue tellus dictum quam, eget porttitor est nulla vel ligula. Suspendisse non magna at dolor dapibus fermentum. Sed a maximus ante. Fusce volutpat, augue nec aliquet luctus, mauris sem vestibulum nulla, et sollicitudin quam dolor ut metus. Suspendisse et odio imperdiet, luctus turpis feugiat, accumsan quam.
      Maecenas faucibus auctor mi quis pretium. Aliquam vitae viverra augue. Etiam cursus, libero sit amet tempor scelerisque, quam velit tempus dui, id dapibus velit ligula vel eros. Duis eleifend dapibus nulla quis blandit. Nulla at metus velit. Integer porttitor sem quis augue pulvinar fermentum. Mauris non gravida nulla. Mauris dapibus sollicitudin lacus, id placerat ex sollicitudin a. Integer eget scelerisque magna. Fusce sodales, elit at sagittis sodales, eros libero sollicitudin dui, nec efficitur ex velit ac magna. Nam finibus turpis leo, vulputate pellentesque nisi hendrerit ut.
      In dapibus viverra ligula. Aenean dictum imperdiet orci quis dapibus. Integer vulputate scelerisque aliquet. Praesent semper ligula felis, a suscipit lacus pulvinar a. Integer eget quam consequat magna volutpat malesuada. Donec sed posuere nulla, in luctus arcu. In vel sem elementum, interdum nisl at, hendrerit magna.      
      Suspendisse mattis neque et elit convallis, eu hendrerit orci maximus. Ut luctus turpis a turpis vehicula convallis. Pellentesque eu lacus risus. Sed rutrum nec nulla sed tincidunt. Sed placerat metus sit amet tincidunt posuere. Integer non pharetra nisi, in iaculis mi. Pellentesque eget nisi tortor. Donec venenatis velit at vehicula dignissim. Quisque cursus eros sit amet ipsum ullamcorper bibendum. Fusce id vestibulum lacus. Vivamus sit amet tortor velit. Aenean pretium dui nec pulvinar ullamcorper. Etiam ac odio eleifend, sodales quam nec, semper erat. Sed volutpat lacus eu ante molestie mollis.
      Vestibulum condimentum sed tellus non egestas. Etiam tincidunt rhoncus tortor, eget maximus magna auctor quis. Vivamus et volutpat velit. Cras vel tempor orci. Phasellus ultricies risus luctus tellus condimentum, sollicitudin euismod elit vulputate. Donec vitae magna dolor. Aenean a tempus neque. In consectetur, ante ac auctor sodales, ex orci venenatis massa, fringilla consectetur turpis diam id nunc. Fusce gravida maximus faucibus. Fusce a lectus et erat bibendum consectetur quis vitae velit. Etiam commodo maximus tortor, vel luctus lectus scelerisque id.`,
      banner: 'assets/home/evento/evento_banner.jpg',
      palestrantes: [
        {
          nome: 'Nome Sobrenome Aqui',
          self: 'assets/home/equipe/eliane_dias_da_paixao.jpg',
          cargo: 'Psicóloga',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tristique tincidunt odio, id tempus libero euismod eu. Suspendisse at efficitur neque. Etiam dignissim ultrices lacus, quis tristique orci tincidunt eu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis pellentesque odio sed leo laoreet vehicula vel a nunc. Morbi id gravida erat, at sagittis felis. Proin id tincidunt ipsum, non aliquam nibh.',
          dataPalestra: new Date()
        }
      ]
    }
  ];

  constructor() {

  }

  public getEventos() {
    return of(this.eventos);
  }

  public getEventoById(id: number) {
    return of(this.eventos.find(evento => evento.id === id));
  }

  public get eventos(): any[] {
    return this._eventos;
  }

  public set eventos(value: any[]) {
    this._eventos = value;
  }
}
