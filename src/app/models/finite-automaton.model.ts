/** Exporta a classe que representa cada estado do autômato */
export class AutomatonNode {
  /** Indica se o estado é um estado final */
  public final = false;
  /** Indica se o estado é o estado inicial */
  public initial = false;
  /** ID do nó no grafo */
  public id: string;
  /** Label do estado, ex.: q0, q1, q2 */
  public label: string;
  /** Indica se o estado está selecionado no momento */
  public selected = false;
}

/** Exporta a classe que representa cada transição entre estados do autômato */
export class AutomatonLink {
  /** ID da transição */
  public id: string;
  /** Label da transação, representando os caracteres que transcicionam por ela */
  public label: string;
  /** ID do estado de origem da transição */
  public source: string;
  /** ID do estado de destino da transição */
  public target: string;
}

export class Automaton {
  public links: AutomatonLink[];

  public nodes: AutomatonNode[];

  public title: string;
}
