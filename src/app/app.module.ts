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
import { MatChipsModule } from '@angular/material/chips';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormatGrammarPipe } from './pipes/format-grammar.pipe';
import { RegularGrammarsViewComponent } from './components/regular-grammars/regular-grammars-view/regular-grammars-view.component';
import { RegularGrammarsListComponent } from './components/regular-grammars/regular-grammars-list/regular-grammars-list.component';
import { DateAgoPipe } from './pipes/date-ago.pipe';
import { MatTooltipModule } from '@angular/material/tooltip';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    FormatGrammarPipe,
    RegularGrammarsViewComponent,
    RegularGrammarsListComponent,
    DateAgoPipe
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
    MatChipsModule,
    MatTooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
