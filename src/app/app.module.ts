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
import { DialogContentConfirmDeleteDialog, RegularGrammarsListComponent } from './components/regular-grammars/regular-grammars-list/regular-grammars-list.component';
import { DateAgoPipe } from './pipes/date-ago.pipe';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RegularGrammarsTestComponent } from './components/regular-grammars/regular-grammars-test/regular-grammars-test.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RegularGrammarsTestManyComponent } from './components/regular-grammars/regular-grammars-test-many/regular-grammars-test-many.component';
import { FiniteAutomatonViewComponent } from './components/finite-automaton/finite-automaton-view/finite-automaton-view.component';
import { NgxGraphModule } from '@swimlane/ngx-graph';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    routingComponents,
    FormatGrammarPipe,
    RegularGrammarsViewComponent,
    RegularGrammarsListComponent,
    DateAgoPipe,
    DialogContentConfirmDeleteDialog,
    RegularGrammarsTestComponent,
    RegularGrammarsTestManyComponent,
    FiniteAutomatonViewComponent,
  ],
  entryComponents: [DialogContentConfirmDeleteDialog],
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
    MatDialogModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    NgxGraphModule,
    MatMenuModule,
  ],
  providers: [],
})
export class AppModule { }
