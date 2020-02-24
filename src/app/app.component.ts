  import { Component, OnInit} from '@angular/core';
  import { AccountsService } from './accounts.service';
  import { Observable } from 'rxjs';
  import * as firebase from 'firebase';



  const settings = {timestampsInSnapshots: true};
  const config = {

    apiKey: "AIzaSyDyS7VYvOYv6be81OWxoqE3MrUPM6NugjQ",
    authDomain: "shopping-e18cb.firebaseapp.com",
    databaseURL: "https://shopping-e18cb.firebaseio.com",
    projectId: "shopping-e18cb",
    storageBucket: "shopping-e18cb.appspot.com",
  };



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
    export class  AppComponent implements OnInit {

      title = 'CURDApp';
     
      ngOnInit() {
        firebase.initializeApp(config);
        firebase.firestore().settings(settings);
      }
     
  servers = [
    {
      instanceType: 'medium',
      name: 'Production',
      status: 'stable',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'large',
      name: 'User Database',
      status: 'stable',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'small',
      name: 'Development Server',
      status: 'offline',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'small',
      name: 'Testing Environment Server',
      status: 'stable',
      started: new Date(15, 1, 2017)
    }
  ];

  
}