import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userDetails: User;
  userDetailsArray: User[];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getPosts();
  }

  showApiJSON() {
    this.userService.getDataFromRandomAPI().subscribe((data: User) =>  {
      console.log(data['results'][0]['gender']);
      // console.log(data['results'][0]['gender']);
      this.userDetails = {...data};
    });
  }

  getPosts(): void {
    this.userService.getPosts()
        .subscribe(
            resultArray => this.userDetailsArray = resultArray,
            error => console.log("Error :: " + error)
        )
}

  ngMouseIn(iconText) {
    this.showApiJSON();
    console.log(iconText);
  }

}
