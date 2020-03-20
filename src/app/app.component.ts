import { Component, OnInit } from '@angular/core';
import { UsuariosService } from './services/usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  usuarios = null;
  usuario = {
    idUsuario: null,
    nombre: null,
    telefono: null,
    email: null
  }
  constructor(private usuariosServicio: UsuariosService) { }

  ngOnInit() {
    this.obtenerUsuarios();
  }
  obtenerUsuarios() {
    this.usuariosServicio.obtenerUsuarios().subscribe(
      result => this.usuarios = result
    );
  }

  hayRegistros(){
    if(this.usuarios==null){
      return false;
    }else{
      return true;
    }
  }
}