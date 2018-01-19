import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.scss'],
})

export class HttpTestComponent implements OnInit {

  constructor(private http:HttpClient) {}

  someData = '';

  getJSON(url:string) {
    this.http.get(url).subscribe(data => {
      console.log('Below is fetched from static JSON file');
      console.log(data);
      this.someData = data['license'];
    });
  }

  jsonURL = 'assets/test.json';

  getMedia() {
    this.http.get('http://media.mw.metropolia.fi/wbma/media/').subscribe(data => {
      console.log('Below is fetched from the API');
      console.log(data);
      this.imgURL = data;
    });
  }

  imgURL;
  
  ngOnInit(): void {
    this.getJSON(this.jsonURL);
    this.getMedia();
  }

}