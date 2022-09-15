import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-control-error',
  templateUrl: './control-error.component.html',
  styleUrls: ['./control-error.component.scss']
})
export class ControlErrorComponent implements OnInit {

  @Input() msgErro!: string;
  @Input() mostrarErro!: boolean;

  constructor() { }

  ngOnInit(): void {
  }



}
