import { Component, OnInit } from '@angular/core';
import { RegularGrammarsService } from 'src/app/services/regular-grammars.service';

@Component({
  selector: 'app-regular-grammars-list',
  templateUrl: './regular-grammars-list.component.html',
  styleUrls: ['./regular-grammars-list.component.scss']
})
export class RegularGrammarsListComponent implements OnInit {

  testDate = new Date("2020-12-22T09:48:00");
  testDate2 = new Date();

  constructor(public regularGrammarsService: RegularGrammarsService) { }

  ngOnInit(): void {
  }

}
