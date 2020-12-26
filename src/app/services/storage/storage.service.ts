import { Injectable } from '@angular/core';
import { Grammar, GrammarRule } from 'src/app/models/grammar.model';

@Injectable({
  providedIn: 'root',
})
export class StorageService {

  constructor() { }

  /**
   * Salva todas as gramáticas enviadas como parâmetro
   * @param grammars lista de gramáticas a serem salvas
   */
  public saveGrammars(grammars: Grammar[]): void {
    localStorage.setItem('webflap:grammars', JSON.stringify(grammars));
  }

  /** Carrega todas as gramáticas salvas no armazenamento interno */
  public loadGrammars(): Grammar[] {
      let grammars: any = localStorage.getItem('webflap:grammars');
      if (!grammars || grammars === '') {
        return [];
      }
      grammars = JSON.parse(grammars);
      grammars.map(((grammar) => {
        grammar = grammar as Grammar;
        grammar.rules.map((rule) => {
          return rule as GrammarRule;
        });
        return grammar;
      }));

      return grammars;
  }
}
