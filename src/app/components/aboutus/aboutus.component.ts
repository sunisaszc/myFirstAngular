import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  private picPath : string;
  private myName : string;
  private dob : string;
  constructor() { }

  ngOnInit() {
    this.picPath="../../assets/image/MyPhoto.jpg";
    this.myName="Sunisa Saejun 57102011072";
    this.dob="30 August 1996";
  }

}
