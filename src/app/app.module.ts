import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormatGrammarPipe } from './pipes/format-grammar.pipe';
import { RegularGrammarsViewComponent } from './components/regular-grammars/regular-grammars-view/regular-grammars-view.component';
import { RegularGrammarsListComponent } from './components/regular-grammars/regular-grammars-list/regular-grammars-list.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    FormatGrammarPipe,
    RegularGrammarsViewComponent,
    RegularGrammarsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
