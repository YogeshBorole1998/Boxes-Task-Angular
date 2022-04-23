import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Boxes';
  color:string ="";
  displayColorChange(color:string){
    console.log(color);
    this.color = color;
  }
}
