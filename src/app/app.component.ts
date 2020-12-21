import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'webflap';

  menu = [
    { name: 'Início', icon: 'home', link: '/' },
    { name: 'Expressões Regulares', icon: 'calculate', link: '/regular-expressions' },
    { name: 'Gramáticas Regulares', icon: 'grading', link: '/regular-grammars' },
    { name: 'Autômatos Finitos', icon: 'workspaces', link: '/finite-automaton' },
  ]
}
