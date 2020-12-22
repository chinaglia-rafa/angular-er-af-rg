import { Injectable } from '@angular/core';
import { Grammar } from '../models/grammar.model';

@Injectable({
  providedIn: 'root'
})
export class RegularGrammarsService {

  grammars: Grammar[] = [];
  currentGrammar: Grammar = null;
  currentGrammarIndex: number = -1;

  constructor() { }

  newGrammar(title: string, initial: string): Grammar {
    let grammar = new Grammar(title, initial);
    this.grammars.push(grammar);
    this.currentGrammarIndex = this.grammars.length - 1;

    this.currentGrammar = this.grammars[this.currentGrammarIndex];
    console.log("Grammar list", this.grammars);
    return this.currentGrammar;
  }

  select(index: number) {
    if (index < 0 || index >= this.grammars.length)
      return false;

      this.currentGrammar = this.grammars[index];
  }
}
