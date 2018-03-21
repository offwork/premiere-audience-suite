import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'search-action',
  templateUrl: './search-action.component.html',
  styleUrls: ['./search-action.component.scss']
})
export class SearchActionComponent {
  
  @Input() color = '';
  @Input() disabled = false;
  @Input() icon = '';
  @Input() label = '';

  @Output() action = new EventEmitter<void>();

  hasFocus = false;

  onClick() { this.action.emit(); }
}
