import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kpop',
  templateUrl: './kpop.component.html',
  styleUrls: ['./kpop.component.css']
})
export class KpopComponent implements OnInit {
  private photoList: {
    title: string,
    url: string
  }[];
  constructor() { }

  ngOnInit() {
    this.photoList = [
      {
        title: "Kim Taeyeon",
        url: "../../assets/image/snsd.jpg"
      }, {
        title: "Kim Samuel",
        url: "../../assets/image/sam.jpg"
      }, {
        title: "Kim Sejeong",
        url: "../../assets/image/sej.jpg"
      }
    ]
  }

}