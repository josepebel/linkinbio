
import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo3';


  flag = true;


  card1: Card = {
    page: "Linkedin",
    color: "#0073b1",
    url: "https://www.linkedin.com/in/jose-antonio-peno"
  }

  card2: Card = {
    page: "Github",
    color: "black",
    url: "https://github.com/josepebel?tab=repositories"
  }

  card3: Card = {
    page: "Telegram",
    color: "#2da5e1",
    url: "https://t.me/josepebel"
  }
  card4: Card = {
    page: "Twitter",
    color: "#1c9cea",
    url: "twitter.com"
  }

  arrCards: Card[] = [this.card1, this.card2, this.card3, this.card4]


  constructor(private renderer: Renderer2) {
  }

  changeMode(){

    this.flag = !this.flag

    for(let i = 0; i < this.arrCards.length; i++){
      if(this.arrCards[i].color == "black"){
      this.arrCards[i].color = "white"
    } else if(this.arrCards[i].color == "white"){
      this.arrCards[i].color = "black"
    }
    }

    if(this.flag) {
      this.renderer.removeClass(document.body, 'dark-class');
      this.renderer.addClass(document.body, 'light-class');

    } else {
      this.renderer.removeClass(document.body, 'light-class');
      this.renderer.addClass(document.body, 'dark-class');
    }

  }


}


export class Card{
  page!: string;
  color!: string;
  url!: string;
  constructor(page: string, color: string, url: string){
    this.page = page;
    this.color = url;
  }

}
