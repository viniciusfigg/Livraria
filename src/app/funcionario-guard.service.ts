import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioGuardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(){
    let user = JSON.parse(sessionStorage.getItem('usuario'));
    let listaUsuarios = JSON.parse(sessionStorage.getItem('listaUsuarios'));
    let retorno;

    if(listaUsuarios.acesso != "2" && listaUsuarios.acesso != "0"){
      console.log("Usuário não é Funcionário sem acesso!")
      this.router.navigate(["/login"]);
      retorno = false;

    } else {
      console.log("Usuário é funcionário, pode cadastrar clientes e livros!");
      retorno = true;
    }

    return retorno;
  }
}
