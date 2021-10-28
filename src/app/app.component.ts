import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router :  Router){
    let user = {logado: false, acesso: ""};
    let listaUsuarios = [
      {nome: "Master", login: "root", senha: "root123", acesso: "0"}, 
      {nome: "cliente", telefone: 99999999999, login: "cliente123", senha: "123", acesso: "1"}, 
      {nome: "funcionario", login: "funcionario123", senha: "123", acesso: "2"} 
    ];

    let listaLivros = [
      {titulo: "Joao e maria", genero: "terror", autor: "Joao da silva", preco: 9.44}, 
      {titulo: "Branca de neve", genero: "Infantil", autor: "Disney", preco: 120.44}, 
    ];

    sessionStorage.setItem("usuario",JSON.stringify(user));
    sessionStorage.setItem("listaUsuarios", JSON.stringify(listaUsuarios))
    sessionStorage.setItem("listaLivros", JSON.stringify(listaLivros))


  };

}
