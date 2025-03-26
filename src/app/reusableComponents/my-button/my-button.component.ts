import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-button',
  imports: [],
  templateUrl: './my-button.component.html',
  styleUrl: './my-button.component.scss',
})
export class MyButtonComponent {
  @Input() btnText: string = '';
  @Input() btnClass: string = '';

  @Output() onBtnClicked = new EventEmitter<any>();

  btnAssignClass(type: string) {
    if (type === 'success') {
      return 'btn btn-success';
    } else {
      return 'btn btn-danger';
    }
  }

  onClick() {
    this.onBtnClicked.emit();
  }
}
