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
  userDetailsIntro: String = "to change the values";
  userDetailsContentFromApi: String = "move mouse over the icons";
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getSpecificDataFromAPI();
  }

  onMouseIn(userPropertyName) {
    switch (userPropertyName) {

      case "name":

        let titleOfUser: String = this.userDetails.name.title;
        let upperCaseFirstLetterOfTitle: String = titleOfUser.charAt(0).toUpperCase() + titleOfUser.slice(1);

        let firstName: String = this.userDetails.name.first;
        let lastName: String = this.userDetails.name.last;

        this.userDetailsIntro = "Hi, My name is"
        this.userDetailsContentFromApi =  upperCaseFirstLetterOfTitle + ". " + firstName + " " + lastName;
        break;

      case "email":
          this.userDetailsIntro = "My email address is"
          this.userDetailsContentFromApi = this.userDetails.email;
        break;  

      case "calendar":

          let dateFromJSON = new Date(this.userDetails.dob.date);
          let dateAfterFormat = dateFromJSON.getDate() + "/" + (dateFromJSON.getMonth() + 1) + "/" + dateFromJSON.getFullYear();
            console.log(dateAfterFormat);


          this.userDetailsIntro = "My birthday is"
          this.userDetailsContentFromApi = dateAfterFormat;
        break;  
       
      case "location":
        let address = this.userDetails.location.postcode + " - " + this.userDetails.location.street;
          this.userDetailsIntro = "My address is"
          this.userDetailsContentFromApi = address;
       break;
       
      case "call":
          this.userDetailsIntro = "My phone number is"
          this.userDetailsContentFromApi = this.userDetails.phone;
      break; 

      case "locked":
          this.userDetailsIntro = "My password is"
          this.userDetailsContentFromApi = this.userDetails.login.password;
      break;
    
      default:
        break;
    }
    
  }

  // ngMouseIn(propertyName) {
  //   switch (propertyName) {
  //     case "name":
  //       this.userDetailsContent = this.userDetails.name.first;
  //       break;
      
  //       case "email":
  //         this.userDetailsContent = this.userDetails.email;
  //         break;  
    
  //     default:
  //       break;
  //   }
  // }

  getSpecificDataFromAPI() {
    return this.userService.getDataFromRandomAPI()
      .subscribe(apiData => {
        this.userDetails = apiData['results'][0];
      });
  }



}






//   getSpecificDataFromAPI() {
//     return this.userService.getDataFromRandomAPI()
// //     .pipe(map(
// //       (responseData: {[key: string]: User }) => {
// //         const dataArray: User[] = [];
// //         for (const key in responseData) {
// //             if (responseData.hasOwnProperty(key)) {
// //                 dataArray.push({ ...responseData[key]})
// //             }  
// //         }
// //         return dataArray;
// //     }
// // ))
// .subscribe( apiData => {
//     console.log(apiData['results'][0]);
//     this.randomUserDetailsArray.push(apiData['results'][0]);
//     // this.randomUserDetailsArray = apiData[0][0].gender;

//     // data => this.prices.push(data.ticker);
// })
//   }

//   subscribe( apiData => {
//     console.log(apiData[0][0].gender);
//     this.randomUserDetailsArray.push(appData[0][0]);
//     this.randomUserDetailsArray = apiData[0][0].gender;

//     // data => this.prices.push(data.ticker);
// })
//   }



// getSpecificDataFromAPI() {
//   this.userService.getDataFromRandomAPI().pipe(map(
//     (responseData) => {
//         const dataArray = [];
//         for (const key in responseData) {
//             if (responseData.hasOwnProperty(key)) {
//                 dataArray.push({ ...responseData[key], id: key})
//             }  
//         }
//         return dataArray;
//     }
// )).subscribe( apiData => {
//     console.log(apiData[0][0].gender);
//     this.randomUserDetailsArray = apiData
// })
// }

//   getPosts(): void {
//     this.userService.getPosts()
//         .subscribe(
//             resultArray => this.userDetailsArray = resultArray,
//             error => console.log("Error :: " + error)
//         )
// }

// ngMouseIn(iconText) {
//     this.getSpecificDataFromAPI();
//   // this.showApiJSON();
//     // this.userService.fetchDataFromRandomAPI()
//   // console.log(iconText);
// }

//   onMouseIn() {
//     this.userDetailsContent = "this is going to contain stuff";
//    // this.userDetailsContent = this.getSpecificDataFromAPI();
//    // console.log(this.getSpecificDataFromAPI());
//  }
