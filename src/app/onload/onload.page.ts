import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-onload',
  templateUrl: './onload.page.html',
  styleUrls: ['./onload.page.scss'],
})
export class OnloadPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  proceed() {
    this.route.navigate(['/login']);
  }

}
