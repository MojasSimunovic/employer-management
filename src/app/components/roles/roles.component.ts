import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RolesService } from '../../roles.service';
import { Role } from '../../models/role';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-roles',
  imports: [FormsModule, NgFor],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.scss',
  standalone: true,
})
export class RolesComponent implements OnInit {
  http = inject(HttpClient);
  roleServices = inject(RolesService);

  isLoader: boolean = true;

  roleList: Role[] = [];
  ngOnInit(): void {
    this.roleServices.getAllRoles().subscribe((res: any) => {
      this.roleList = res.data;
      this.isLoader = false;
    });
  }

  // firstName?: string = 'Something';
  // version: number = 19;
  // inputType: string = 'button';
  // selectedState: string = '';
  // greetFunction() {
  //   alert('herllo');
  // }
  // showMessage(av: string) {
  //   alert(av);
  // }
}
