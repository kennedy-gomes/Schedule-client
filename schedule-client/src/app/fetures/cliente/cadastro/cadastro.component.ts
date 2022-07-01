import { Component, OnInit } from '@angular/core';
import { faArrowLeft, faCheck, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  public faArrowLeft: IconDefinition = faArrowLeft;
  public faCheck: IconDefinition = faCheck;
  constructor() { }

  ngOnInit(): void {
  }

}
