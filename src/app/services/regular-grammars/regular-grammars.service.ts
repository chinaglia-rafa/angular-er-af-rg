import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Grammar } from '../../models/grammar.model';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class RegularGrammarsService {

  /** Lista de gramáticas carregadas */
  grammars: Grammar[] = [];
  /** Gramática sendo trabalhada atualmente */
  currentGrammar: Grammar = null;
  /** Índice da gramática atual */
  currentGrammarIndex: number = -1;
  /** Última gramática excluída */
  lastGrammar: Grammar = null;
  /** Índice da última gramática excluída */
  lastGrammarIndex: number = -1;

  constructor(
    private _snackBar: MatSnackBar,
    private _storage: StorageService
  ) {
    this.grammars = this._storage.loadGrammars();
  }

  /**
    Cria uma nova gramática com os valores passados e insere na lista de
    gramáticas carregadas.
    @param {string} title Título da gramática
    @param {initial} initial Símbolo inicial da gramática
    @return {Grammar} gramática criada
   */
  newGrammar(title: string, initial: string): Grammar {
    let grammar = new Grammar(title, initial);
    this.grammars.push(grammar);
    this.currentGrammarIndex = this.grammars.length - 1;

    this.currentGrammar = this.grammars[this.currentGrammarIndex];
    return this.currentGrammar;
  }

  /**
    Seleciona uma gramática como a atual.
    @param {number} index Índice da gramática a ser selecionada
   */
  select(index: number) {
    if (index < 0 || index >= this.grammars.length)
      return false;

      this.currentGrammar = this.grammars[index];
      this.currentGrammarIndex = index;
  }

  /**
    Remove uma gramática da lista de gramáticas e oferece a possibilidade
    de desfazer.
    @param {number} index Índice da gramática a ser removida
   */
  remove(index: number): boolean {
    if (index < 0 || index >= this.grammars.length)
      return false;

      if (this.currentGrammarIndex == index) {
        if (this.currentGrammarIndex > 0) this.currentGrammarIndex--;
      }
      this.select(this.currentGrammarIndex);

      this.lastGrammarIndex = index;
      this.lastGrammar = this.grammars.splice(index, 1)[0];

      if (this.grammars.length == 0)
        this.newGrammar('Gramática sem nome', 'S');

      this._storage.saveGrammars(this.grammars);

      return true;
  }

  /** Desfaz a exclusão de uma gramática */
  undo() {
    this.grammars.splice(this.lastGrammarIndex, 0, this.lastGrammar);
    this.select(this.lastGrammarIndex);
    this.lastGrammar = null;
    this.lastGrammarIndex = -1;

    this.saveAll();

    this._snackBar.open("Gramática recuperada com sucesso.", null, {
      duration: 2000,
    });
  }

  saveAll() {
    this._storage.saveGrammars(this.grammars);
  }
}
