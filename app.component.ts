import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'form-example';
  private password = '';
  private name = '';
  private vypisCorrect = '';
  private vypisIncorrect = '';
  private logged = false;
  clickLogin() {
    if ( this.name === 'Robin' && this.password === 'Robin') {

      this.logged = true;
      this.vypisCorrect = 'Logged in';
    } else {
      this.logged = false;
      this.vypisIncorrect = 'Incorrect, please try it again!';
             }
  }

}
