import { Component } from '@angular/core';
import { DesignationComponent } from '../designation/designation.component';
import { RolesComponent } from '../roles/roles.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-master',
  imports: [DesignationComponent, RolesComponent, NgClass],
  templateUrl: './master.component.html',
  styleUrl: './master.component.scss',
})
export class MasterComponent {
  currentComponent: string = 'Roles';

  changeTab(tabName: string) {
    this.currentComponent = tabName;
  }

  addActive(curr: string) {
    if (curr === this.currentComponent) {
      return 'btn-success';
    } else {
      return 'btn-primary';
    }
  }
}
