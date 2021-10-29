import { Component, OnInit } from '@angular/core';
import { ServiciofirebaseService } from '../../services/serviciofirebase.service';
import { Usuario } from '../../interfaces/usuarios';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  usuarios:Usuario[]=[];


  constructor(private servicioFire:ServiciofirebaseService) {}

ngOnInit()
{
  this.servicioFire.listaUsuario().subscribe(resp=>
    { 
      this.usuarios=[];
      /*this.usuarios.push(...resp.forEach(u=>u.));
      console.log(this.usuarios);*/
      resp.forEach(u=>this.usuarios.push(u))
      console.log(JSON.stringify(this.usuarios));
    });
}

onClick()
{
  this.servicioFire.crear();
  
}

}
