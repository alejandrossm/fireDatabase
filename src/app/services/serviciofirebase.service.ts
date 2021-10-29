import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { Usuario, Usuarios } from '../interfaces/usuarios';




@Injectable({
  providedIn: 'root'
})
export class ServiciofirebaseService {

  //datos:Observable<any[]>;
  //datos:Usuario[];

  constructor(private db: AngularFireDatabase) {

  }

  listaUsuario() {
    return this.db.list<Usuario>('usuarios').valueChanges();
  }

  

  crear() {
    
    let usuario: Usuario ={
      username: 'xxx',
      password: 'yyy'
    }
   
  
    //var key=usuario.username;
    this.db.list('usuarios').push(usuario);
    //this.db.list('usuarios').set(null,usuario);
    //const db = getDatabase();
    //set(ref(db, 'usuarios/'), {usuario})  


  }
}
