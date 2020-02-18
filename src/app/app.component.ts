import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-tutorial';
  contents = 'I am a software Developer !!!';
  isDisabled = false;
  firstName = 'Pune';
  
  onSubmit() {
    this.isDisabled = !this.isDisabled;
    // console.log('You have clicked onsubmit button');
  }

  detectData(value: string) {
    console.log(value);
  }
}
