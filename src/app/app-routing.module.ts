import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CadastroFuncionarioComponent } from './cadastro-funcionario/cadastro-funcionario.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { CadastroLivroComponent } from './cadastro-livro/cadastro-livro.component';
import { AlugarLivroComponent } from './alugar-livro/alugar-livro.component';
import { AcessarLivroComponent } from './acessar-livro/acessar-livro.component';
import { AutenticaGuardService } from './autentica-guard.service';
import { RootGuardService } from './root-guard.service';
import { FuncionarioGuardService } from './funcionario-guard.service';
import { ClienteGuardService } from './cliente-guard.service';



const routes: Routes = [

  {path: 'home', component: HomeComponent},
  {path: 'livros', component: AcessarLivroComponent},
  {path: 'login',component:LoginComponent},
  {path: 'cadastro-funcionario', canActivate:[AutenticaGuardService, RootGuardService], component:CadastroFuncionarioComponent},
  {path: 'cadastro-cliente', canActivate:[AutenticaGuardService, FuncionarioGuardService], component:CadastroClienteComponent},
  {path: 'cadastro-livro', canActivate:[AutenticaGuardService, FuncionarioGuardService], component:CadastroLivroComponent},
  {path: 'alugar-livro', canActivate:[AutenticaGuardService, ClienteGuardService], component:AlugarLivroComponent},
  {path: "", redirectTo: "/home", pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
