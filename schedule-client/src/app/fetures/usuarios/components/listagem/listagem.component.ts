import { Component, OnInit } from '@angular/core';
import { faPencil, faTrashCan, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent implements OnInit {
  public faTrashcan: IconDefinition = faTrashCan;
  public faPencil: IconDefinition = faPencil;
  constructor() { }

  ngOnInit(): void {
  }

}
