import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userDetails: User;
  userDetailsIntro: string = 'to change the values';
  userDetailsContentFromApi: string = 'move mouse over the icons';

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getSpecificDataFromAPI();
  }

  getSpecificDataFromAPI() {
    return this.userService.getDataFromRandomAPI()
      .subscribe(apiData => {
        this.userDetails = apiData['results'][0];
      });
  }

  onMouseIn(userPropertyName) {

    switch (userPropertyName) {

      case 'name':

        const titleOfUser: string = this.userDetails.name.title;
        const upperCaseFirstLetterOfTitle: string = titleOfUser.charAt(0).toUpperCase() + titleOfUser.slice(1);

        const firstName: string = this.userDetails.name.first;
        const lastName: string = this.userDetails.name.last;

        this.userDetailsIntro = 'Hi, My name is'
        this.userDetailsContentFromApi =  upperCaseFirstLetterOfTitle + '. ' + firstName + ' ' + lastName;
        break;

      case 'email':
          this.userDetailsIntro = 'My email address is'
          this.userDetailsContentFromApi = this.userDetails.email;
          break;

      case 'calendar':

          const dateFromJSON = new Date(this.userDetails.dob.date);
          const dateAfterFormat = dateFromJSON.getDate() + '/' + (dateFromJSON.getMonth() + 1) + '/' + dateFromJSON.getFullYear();
          console.log(dateAfterFormat);


          this.userDetailsIntro = 'My birthday is'
          this.userDetailsContentFromApi = dateAfterFormat;
          break;

      case 'location':
        const address = this.userDetails.location.postcode + ' - ' + this.userDetails.location.street;
        this.userDetailsIntro = 'My address is';
        this.userDetailsContentFromApi = address;
        break;

      case 'call':
          this.userDetailsIntro = 'My phone number is'
          this.userDetailsContentFromApi = this.userDetails.phone;
          break;

      case 'locked':
          this.userDetailsIntro = 'My password is'
          this.userDetailsContentFromApi = this.userDetails.login.password;
          break;

      default:
        break;
    }
  }
}
