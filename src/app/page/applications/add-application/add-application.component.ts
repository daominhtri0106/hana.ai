import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-application',
  templateUrl: './add-application.component.html',
  styleUrls: ['./add-application.component.scss']
})
export class AddApplicationAddComponent implements OnInit {

  isAddApplication = false;

  constructor() { }

  ngOnInit(): void {
  }

  addApplicaltion() {
    this.isAddApplication = !this.isAddApplication;
  }

  onExit(value) {
    this.isAddApplication = false;
  }

}
