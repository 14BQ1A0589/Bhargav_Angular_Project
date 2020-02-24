import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DsService } from '../ds.service';
import { DataSource } from '@angular/cdk/collections';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';



@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  onAdd() {
    return this.hide = !this.hide;
  }
  
  userDisplayName = '';
  
  title = 'Shop2';
  required=''
  hide=true;

  displayedColumns = ['username', 'password'];
  dataSource = new loginDataSource(this.ds);



 
loginForm: FormGroup;
username:string='';
password:string='';


constructor(private router: Router, private ds: DsService, private formBuilder: FormBuilder) { }

logins = {};

ngOnInit() { 
  this.userDisplayName = sessionStorage.getItem('loggedUser');
  this.loginForm = this.formBuilder.group({
    'username' : [null],
    'password ' : [null]
  
  });
  
}




myId(form:NgForm) {
  console.log(form);
this.ds.postlogin(form)
  .subscribe(res => {
  let id = res['key'];
  this.router.navigate(['data',id]);
}, (err) => {
  console.log(err);
});

}

}
export class loginDataSource extends DataSource<any> {

  constructor(private ds: DsService) {
    super()
  }

  connect() {
    return this.ds.getlogin();
  }

  disconnect() {

  }
}