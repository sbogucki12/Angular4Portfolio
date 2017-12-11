import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // userNameInput binds to the input field for the greeting via ngModel
  userNameInput: string = "";
  // Declaring userName which is blank now, value will be added when user clicks Submit
  userName: string = "";
  // Declaring greeting which is blank now, value will be added when user clicks Submit
  greeting: string = "";

  onCreateUsername(userNameInput) {
    // Via ngModel takes userNameInput from input field and assigns it to userName
    this.userName = userNameInput;
    // Uses userName in the greeting.  Upon submit, the greeting now has value, and so displays
    // on the DOM
    this.greeting = "Well, " + this.userName + ", it's nice to have you here!";
    return this.greeting;
  }
}
