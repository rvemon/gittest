import { templateJitUrl } from "@angular/compiler";
import { Component } from "@angular/core";


@Component({
    selector: 'main-page',
    templateUrl: './mainpage.component.html'
})

export class Mainpage{

    public titulo:string;
    public comentario:string;

    constructor(){
        this.titulo = "Main Page"
        this.comentario="Demo created by Ricardo Vente."
        console.log("componente mainpage cargado");
    }
}