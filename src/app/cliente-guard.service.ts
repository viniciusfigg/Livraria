import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ClienteGuardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(){ 
    let user = JSON.parse(sessionStorage.getItem('usuario'));
    let listaUsuarios = JSON.parse(sessionStorage.getItem('listaUsuarios'));
    let retorno;

    if(user.acesso != "1" || user.acesso !="0"){
      console.log("Usuário não é Cliente, sem acesso!")
      this.router.navigate(["login"]);
      retorno = false;

    } else {
      console.log("Usuário é cliente, pode alugar livros!");
      retorno = true;
    }

    return retorno;
  }
}
