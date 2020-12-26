/** Classe referente a cada regra dentro de uma gramática regular */
export class GrammarRule {
  /** Lado esquerdo da regra (símbolo não terminal) */
  public left: string;
  /** Lado direito da regra (lista de símbolos terminais e não terminais) */
  public right: string[] = [];

  /**
   * Seta o valor do lado esquerdo da regra de gramática, validando a entrada
   * @param content Conteúdo a ser adicionado.
   */
  public setLeft(content: string): void {
    if (content.length > 1 || content.toLowerCase() === content || content === 'ε') {
      throw Error('Formato de caractere não terminal é letra maiúscula [A-Z]!');
    }

    this.left = content;
  }

  /**
   * Adiciona um valor do lado direito da regra de gramática.
   * @param content conteúdo a ser adicionado.
   */
  public addRight(content: string): void {
    this.right.push(content);
  }

  /**
   * Remove um valor do lado direito da regra através de seu índice
   * @param index índice do item a ser removido
   * @return o item removido.
   */
  public remove(index: number): string {
    if (index < 0 || index >= this.right.length) {
      throw Error('Índice fora da range de right.');
    }

    return this.right.splice(index, 1)[0];
  }
}

/** Classe referente a uma gramática regular */
export class Grammar {
  /** Nome da gramática para referência do usuário */
  public title: string;
  /** Lista de regras que compõem a gramática */
  public rules: GrammarRule[] = [];
  /** Símbolo inicial da gramática */
  public initial: string;
  /** Data da última modificação da gramática */
  public modified: Date = new Date();
  public definition = '';

  constructor(title: string, initial: string) {
    this.title = title;
    this.initial = initial || 'S';
  }

  public generateDefinition(): void {
    /** G = ({S, A}, {a, b}, P, S) */
    const terminals = [];
    const nonTerminals = [];
    for (const rule of this.rules) {
      if (nonTerminals.indexOf(rule.left) === -1) {
        nonTerminals.push(rule.left);
      }
      for (const part of rule.right) {
        for (const symbol of part.split('')) {
          if (symbol.toLowerCase() !== symbol) {
            continue;
          }
          if (terminals.indexOf(symbol) === -1) {
            terminals.push(symbol);
          }
        }
      }
    }
    this.definition = `G = ({${nonTerminals.join(', ')}}, {${terminals.join(', ')}}, P, ${this.initial})`;
    console.log(this.definition);
  }

  /**
   * Remove uma regra com base em seu índice
   * @param index índice do item a ser removido
   * @return o item removido.
   */
  public remove(index: number): GrammarRule {
    if (index < 0 || index >= this.rules.length) {
      throw Error('Índice fora da range de rules.');
    }

    const removed = this.rules.splice(index, 1)[0];

    this.generateDefinition();

    return removed;
  }
}
