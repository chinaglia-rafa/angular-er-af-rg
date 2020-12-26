import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RegularGrammarsService } from 'src/app/services/regular-grammars/regular-grammars.service';


@Component({
  selector: 'app-regular-grammars-list',
  templateUrl: './regular-grammars-list.component.html',
  styleUrls: ['./regular-grammars-list.component.scss']
})
export class RegularGrammarsListComponent implements OnInit {

  testDate = new Date("2020-12-22T09:48:00");
  testDate2 = new Date();

  constructor(
    public regularGrammarsService: RegularGrammarsService,
    private _matDialog: MatDialog,
    private _snackBar: MatSnackBar,
  ) { }

  openDialog(index: number) {
    const dialogRef = this._matDialog.open(DialogContentConfirmDeleteDialog);

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        if (this.regularGrammarsService.remove(index)) {
          let snackBarRef = this._snackBar.open("Gramática excluída com sucesso.", "Desfazer", {
            duration: 5000,
          });
          snackBarRef.onAction().subscribe(() => {
            this.regularGrammarsService.undo();
          });
        }
      }
    });
  }

  ngOnInit(): void {
  }

}

@Component({
  selector: 'dialog-content-confirm-delete-dialog',
  templateUrl: '../../dialog/dialog-content-confirm-delete-dialog.html',
})
export class DialogContentConfirmDeleteDialog {}
