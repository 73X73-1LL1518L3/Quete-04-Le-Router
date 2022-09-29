import { Component, OnInit } from '@angular/core';
import { User } from "../../models/user.models";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  user1 = new User (
    "Doe",
     "John",
      25,
       "Hey",
       "https://randomuser.me/api/portraits/lego/2.jpg", true
  )


  


}