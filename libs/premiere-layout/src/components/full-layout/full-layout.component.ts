import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  templateUrl: './full-layout.component.html',
  styleUrls: ['./full-layout.component.scss']
})
export class FullLayoutComponent implements OnInit {
  mode = new FormControl('over');

  constructor() {}

  ngOnInit() {}
}
