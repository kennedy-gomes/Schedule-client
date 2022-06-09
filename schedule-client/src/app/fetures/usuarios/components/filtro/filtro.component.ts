import { Component, OnInit } from '@angular/core';
import { faEraser, faPlus, faSearch, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.scss']
})
export class FiltroComponent implements OnInit {
  public faEraser: IconDefinition = faEraser;
  public faSearch: IconDefinition = faSearch;
  public faPlus: IconDefinition = faPlus;
  constructor() { }

  ngOnInit(): void {
  }

}
