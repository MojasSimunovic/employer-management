import { Component, inject } from '@angular/core';
import { RolesService } from '../../roles.service';
import { OnInit } from '@angular/core';
import { Designation } from '../../models/designation';

@Component({
  selector: 'app-designation',
  imports: [],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.scss',
})
export class DesignationComponent implements OnInit {
  designationList?: Designation[];
  roleService = inject(RolesService);
  isLoader: boolean = true;
  ngOnInit(): void {
    this.roleService.getDesignations().subscribe((res: any) => {
      this.designationList = res.data;
      this.isLoader = false;
    });
  }
}
