import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'formtd';
  ans : string = '';
@ViewChild('form') signUpForm! :NgForm;
genders :string[] =['Female', 'Male', 'Trans']


  onSubmit(f : NgForm){
    console.log(f);
    f.reset();
  }
  // onSubmit(){
  //   console.log(this.signUpForm);
  //   console.log(this.signUpForm.value);   
  //   this.signUpForm.reset();
  // }


  onSetValue(){
    this.signUpForm.setValue({
      userDetails : {
        userName : 'Varshketu',
        email : 'dvarshketu@gmail.com'
      },
      gender : 'male',
      secret : 'book',
      answer : '7 Habits of an Highly Effective People'
    })
  }
  onSuggest(){
    this.signUpForm.form.patchValue({
      userDetails : {
        userName : 'ketu....k2',
      }
    })
  }

}
