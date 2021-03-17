
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
    icon: "Linkedin",
    color: "#0073b1",
    url: "https://www.linkedin.com/in/jose-antonio-peno"
  }

  card2: Card = {
    page: "Github",
    icon: "Github",
    color: "black",
    url: "https://github.com/josepebel?tab=repositories"
  }

  card3: Card = {
    page: "Your Acclaim",
    icon: "chevron-double-up",
    color: "#26689a",
    url: "https://www.youracclaim.com/users/jose-antonio-peno-beldad/badges?sort=-state_updated_at&page=1"
  }
  card4: Card = {
    page: "Telegram",
    icon: "Telegram",
    color: "#2da5e1",
    url: "https://t.me/josepebel"
  }
  card5: Card = {
    page: "Whatsapp",
    icon: "Whatsapp",
    color: "#00aa38",
    url: "https://wa.me/34647284948"
  }



  arrCards: Card[] = [this.card1, this.card2, this.card3, this.card4, this.card5]


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
  icon!: string;
  constructor(page: string, color: string, url: string, icon: string){
    this.page = page;
    this.color = color;
    this.url = url;
    this.icon = icon;
  }

}
