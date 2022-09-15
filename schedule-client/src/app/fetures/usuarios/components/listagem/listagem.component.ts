import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { faPencil, faTrashCan, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { userInterface } from 'src/app/core/interface/user.interface';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent implements OnInit {

  public faTrashcan: IconDefinition = faTrashCan;
  public faPencil: IconDefinition = faPencil;
  public dataSource: Array<userInterface> = new Array();

  id!: string;
  request!: any

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getAll();
  }

  public getAll(): void {
    this.userService.getAll().subscribe((res) => {
      this.dataSource = res;
    });
  }

  public redirectPut(id: string): void {
    this.router.navigate(['/editar/', id]);
  }

  public delete(id: string): void {
    this.userService.delete(id).subscribe((res) => {
      this.dataSource = res;})
    console.log(id);
  }
}
