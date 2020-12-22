import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Grammar, GrammarRule } from 'src/app/models/grammar.model';
import { RegularGrammarsService } from 'src/app/services/regular-grammars.service';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-regular-grammars-view',
  templateUrl: './regular-grammars-view.component.html',
  styleUrls: ['./regular-grammars-view.component.scss'],
})
export class RegularGrammarsViewComponent implements OnInit {

  leftFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern('^[A-Z]$'),
  ]);

  rightFormControl = new FormControl('', []);

  matcher = new MyErrorStateMatcher();

  constructor(public regularGrammarsService: RegularGrammarsService) { }

  ngOnInit(): void {
    this.regularGrammarsService.newGrammar('Gramática sem nome', 'S');
  }

  /**
    Adiciona o conteúdo validado do formulário de adição de regras à gramática atual
    @param {any} left Referência ao input esquerdo
    @param {any} right Referência ao input direito
    @return {boolean} true se tudo tiver ido bem
  **/
  addToGrammar(left:any, right: any): boolean {
    if (!this.leftFormControl.valid || !this.rightFormControl.valid || right.value == '') return false;
    if (!this.regularGrammarsService.currentGrammar) {
      this.regularGrammarsService.newGrammar('Gramática sem nome', 'S');
    }
    console.log(left.value, right.value);
    let rule = new GrammarRule();
    rule.setLeft(left.value);
    let rightValues = right.value.replaceAll(" ", "");
    for (let derivation of rightValues.split("|")) {
      rule.addRight(derivation);
    }

    this.regularGrammarsService.currentGrammar.rules.push(rule);

    this.regularGrammarsService.currentGrammar.generateDefinition();
    right.value = '';
    left.value = '';
    left.focus();

    return true;
  }

  addEpsilon(obj: any) {
    obj.value = obj.value.trim();
    if (obj.value == '') obj.value = 'ε'
    else obj.value += ' | ε'
  }

  hasEpsilon(obj: any) {
    return obj.value.search('ε') != -1
  }

  removeEpsilon(obj: any): boolean {
    if (!this.hasEpsilon(obj)) return false;
    obj.value = obj.value.trim();
    if (obj.value == 'ε') {
      obj.value = '';
      return true;
    }
    obj.value = obj.value.replaceAll(' ε |', '');
    obj.value = obj.value.replaceAll('ε |', '');
    obj.value = obj.value.replaceAll('ε|',  '');
    obj.value = obj.value.replaceAll('| ε ', '');
    obj.value = obj.value.replaceAll('| ε', '');
    obj.value = obj.value.replaceAll('|ε',  '');

    return true;
  }

}
