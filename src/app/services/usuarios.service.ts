import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UsuariosService {

    URL = "http://localhost/bdMySql/";

    constructor(private http: HttpClient) {}

    obtenerUsuarios(){
        return this.http.get(`${this.URL}obtenerUsuarios.php`);
    }

}