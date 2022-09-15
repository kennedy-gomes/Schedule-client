import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute } from '@angular/router';

import { faArrowLeft, faCheck, IconDefinition, } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { registerinterface } from 'src/app/core/interface/register.interface';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  public faArrowLeft: IconDefinition = faArrowLeft;
  public faCheck: IconDefinition = faCheck;
  public dataSource: Array<registerinterface> = new Array();

  myForm!: FormGroup;
  id!: string;
  request!: registerinterface;

  constructor(private FormBuilder: FormBuilder, private UserService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.myForm = this.FormBuilder.group({
      nome: ['' ,Validators.required],
      email: ['',[Validators.required, Validators.email]],
      senha: ['', Validators.required],
      acesso: ['',Validators.required]
    });
   this.id = this.route.snapshot.paramMap.get('id')!;
    if(this.id) {
      this.buscarId()
    };
  }

  public confirmar(): void {
    if (this.id) {
      this.update();

      return;
    }

   this.criaruser();
  }

  public buscarId(): void {
    this.UserService.getID(this.id).subscribe(res => {
      this.request = res
    });
  }

  public criaruser(): void {
    this.UserService.post(this.request).subscribe(res => {
      alert("usuario cadastrado com sucesso!");
    });
  }

  public update(): void {
    this.UserService.put(this.id, this.request).subscribe(res => {
      alert("usuario atualizado com sucesso!");
    });
  }


  VerificaValidTouche(campo: string){
    return !this.myForm.get(campo)?.valid && !this.myForm.get(campo)?.touched
  }

  aplicaCssError(campo: string){
    return {
      'has-error': this.VerificaValidTouche(campo),
      'has-feedback': this.VerificaValidTouche(campo)
    }
  }
}
