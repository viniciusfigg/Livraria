import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RootGuardService implements CanActivate{

  constructor(private router: Router) { }

  canActivate(){
    let user = JSON.parse(sessionStorage.getItem('usuario'));
    let listaUsuarios = JSON.parse(sessionStorage.getItem('listaUsuarios'));
    let usuario = JSON.parse(sessionStorage.getItem('usuario'));
    let retorno;

    if(usuario.acesso != "0"){
      console.log("Usuário não é o ROOT sem acesso!")
      this.router.navigate(["/login"]);
      retorno = false;

    } else {
      console.log("Usuário ROOT, Logado!");
      console.log(sessionStorage.getItem("usuario"));
      console.log(usuario.acesso)
      console.log(user)
      console.log(user.acesso)
      retorno = true;
    }

    return retorno;
  }

}
