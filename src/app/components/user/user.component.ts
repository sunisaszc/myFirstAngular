import { Component, OnInit } from '@angular/core';
import { GetphotoService } from '../../services/getphoto.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private my_name: string;
  private age: number;
  private email: string;
  private address: {
    street: string,
    city: string,
    province: string,
    postcode: string
  }
  private skills: string[];
  private isEditable: boolean = true;
  private photoList:Photo[];

  constructor(private getphotoService: GetphotoService) { } //init ค่าตอนเริ่ม component

  ngOnInit() {

    this.my_name = "Kim Taeyeon";
    this.age = 28;
    this.email = "fern14061@gmail.com";
    this.address = {
      street: "Seoul",
      city: "Dindeang",
      province: "Bangkok",
      postcode: "10400"
    }
    this.skills = ["Singing", "Dancing"];

    this.getphotoService.getPhotoList().subscribe((response) => {
      this.photoList = response;
      this.photoList.splice(4, 4995);
    })

  }

  addSkill(skill) {
    this.skills.unshift(skill);  //ต่ออันแรก ต่อหัว
    return false; // add for do not want refresh page
  }

  removeSkill(skill) {
    this.skills.forEach((element, index) => {
      if (element == skill) {   //ถ้า element ที่วนอยู่ตรงกับที่เราต้องการลบ
        this.skills.splice(index, 1);   //ตัดออก
      }
    });
  }

  toggleEdit() {
    this.isEditable = !this.isEditable;
  }



}

interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
