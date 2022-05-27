import { DOCUMENT } from '@angular/common';
import { Component, Inject,  } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fronOtroPunto';
  ubi = "string";

  constructor(private router: Router, public sanitizer: DomSanitizer,@Inject(DOCUMENT) private document: Document){
    this.ubi = this.document.location.pathname;

  }

  ubicacion(){
    this.ubi = this.document.location.pathname;
  }
 
  prev() {
    this.ubicacion();
    if(this.ubi ==  "/home"){
      this.router.navigate(["contact"]);
    }else if(this.ubi ==  "/about" ){
      this.router.navigate(["home"]);
    }else if(this.ubi ==  "/products" ){
      this.router.navigate(["about"]);
    }else if(this.ubi ==  "/contact" ){
      this.router.navigate(["products"]);
    }
  }

  next() {
    this.ubicacion();
    console.log(this.ubi)
    if(this.ubi ==  "/home"){
      this.router.navigate(["about"]);
    }else if(this.ubi ==  "/about" ){
      this.router.navigate(["products"]);
    }else if(this.ubi ==  "/products" ){
      this.router.navigate(["contact"]);
    }else if(this.ubi ==  "/contact" ){
      this.router.navigate(["home"]);
    }
  } 
}
