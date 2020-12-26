import { Injectable } from '@angular/core';
import { Grammar, GrammarRule } from 'src/app/models/grammar.model';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  saveGrammars(grammars: Grammar[]) {
    localStorage.setItem("webflap:grammars", JSON.stringify(grammars));
  }

  loadGrammars(): Grammar[] {
      let grammars: any = localStorage.getItem("webflap:grammars");
      if (!grammars || grammars == '') return [];
      grammars = JSON.parse(grammars);
      grammars.map((grammar => {
        grammar = grammar as Grammar;
        grammar.rules.map((rule) => {
          return rule as GrammarRule;
        });
        return grammar;
      }));

      console.log("grammars loaded", grammars);
      return grammars;
  }
}
