import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  imports: [],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss',
})
export class AlertComponent {
  @Input() alertType: string = '';
  @Input() message: string = '';

  assignClass(type: string) {
    if (type === 'Success') {
      return 'alert alert-success';
    } else {
      return 'alert alert-danger';
    }
  }
}
