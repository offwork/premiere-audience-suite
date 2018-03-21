import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent {

  @Input() placeholder: string;

  hasFocus = false;

  myControl: FormControl = new FormControl();

  options = [
    'One',
    'Two',
    'Three'
   ];

}
