import { Component, OnInit } from '@angular/core';
import { faEraser, faPlus, faSearch, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.scss']
})
export class FiltroComponent implements OnInit {
  public faEraser: IconDefinition = faEraser;
  public faSearch: IconDefinition = faSearch;
  public faPlus: IconDefinition = faPlus;

  any: any;

  constructor(private clientService: ClientService) { }

  ngOnInit(){
    this.clientService.getclient()
    .subscribe(res => this.any = res)
  }

}
