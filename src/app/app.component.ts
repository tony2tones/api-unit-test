import { Component, OnInit } from '@angular/core';
import { Name } from './response/nameresponse.model';
import { NameMockService } from './services/name.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private mockservice: NameMockService){}
  title = 'api-testing';
  names:any = [];

  ngOnInit() {

    this.names = this.mockservice
      .getNamespaces().subscribe((data) => {
        console.log(data);
      })

  }
}

