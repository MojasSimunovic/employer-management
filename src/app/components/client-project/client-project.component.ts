import { Component, inject, OnInit, signal } from '@angular/core';
import {
  FormControl,
  Validators,
  FormGroup,
  ReactiveFormsModule,
  AbstractControl,
} from '@angular/forms';
import { Employee } from '../../models/employee';
import { RolesService } from '../../roles.service';
import { Client } from '../../models/class/client';
import { DatePipe } from '@angular/common';
import { ClientProject } from '../../models/project';
import { AlertComponent } from '../../reusableComponents/alert/alert.component';
import { MyButtonComponent } from '../../reusableComponents/my-button/my-button.component';

@Component({
  selector: 'app-client-project',
  imports: [ReactiveFormsModule, DatePipe, AlertComponent, MyButtonComponent],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.scss',
})
export class ClientProjectComponent implements OnInit {
  validateTypeDate(control: AbstractControl) {
    const value = control.value;
    //min date 01/01/1850
    if (value < new Date().toISOString().split('T')[0]) {
      return { required: true };
    } else {
      return null;
    }
  }

  appService = inject(RolesService);

  projectList = signal<ClientProject[]>([]);

  firstName = signal('Signal text');

  projectForm: FormGroup = new FormGroup({
    clientProjectId: new FormControl(0),
    projectName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    startDate: new FormControl('', [
      Validators.required,
      this.validateTypeDate,
    ]),
    expectedEndDate: new FormControl('', [
      Validators.required,
      this.validateTypeDate,
    ]),
    leadByEmpId: new FormControl(0),
    completedDate: new FormControl(''),
    contactPerson: new FormControl(''),
    contactPersonContactNo: new FormControl(''),
    totalEmpWorking: new FormControl(0),
    projectCost: new FormControl(0),
    projectDetails: new FormControl(''),
    contactPersonEmailId: new FormControl(''),
    clientId: new FormControl(''),
  });

  employees?: Employee[];
  clients?: Client[];

  ngOnInit(): void {
    this.getAllClients();
    this.getAllEmployees();
    this.getAllProjects();
  }

  getAllEmployees() {
    this.appService.getAllEmployees().subscribe((res) => {
      this.employees = res.data;
    });
  }

  getAllClients() {
    this.appService.getAllClients().subscribe((res) => {
      this.clients = res.data;
    });
  }

  onSaveProject() {
    const formValue = this.projectForm.value;
    this.appService.addClientProjectUpdate(formValue).subscribe((res) => {
      if (res.result) {
        alert('project created');
      } else {
        alert(res.message);
      }
    });
  }

  getAllProjects() {
    this.appService.getAllProjects().subscribe((res) => {
      this.projectList.set(res.data);
    });
  }

  changeSignal() {
    this.firstName.set('New value');
  }
}
