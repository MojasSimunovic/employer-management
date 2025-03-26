import { Component, inject } from '@angular/core';
import { Client } from '../../models/class/client';
import { FormsModule, NgModel } from '@angular/forms';
import { OnInit } from '@angular/core';
import { RolesService } from '../../roles.service';
import { AsyncPipe, JsonPipe, TitleCasePipe } from '@angular/common';
import { DatePipe } from '@angular/common';
import { Observable } from 'rxjs';
import { AlertComponent } from '../../reusableComponents/alert/alert.component';
import { MyButtonComponent } from '../../reusableComponents/my-button/my-button.component';

@Component({
  selector: 'app-client',
  imports: [
    FormsModule,
    TitleCasePipe,
    DatePipe,
    AlertComponent,
    MyButtonComponent,
  ],
  templateUrl: './client.component.html',
  styleUrl: './client.component.scss',
})
export class ClientComponent implements OnInit {
  clientService = inject(RolesService);
  clientObj: Client = new Client();
  clientList: Client[] = [];

  clientsLisst$: Observable<any> = this.clientService.getAllClients();

  currentDate: Date = new Date();

  ngOnInit(): void {
    this.loadClient();
  }

  loadClient() {
    this.clientService.getAllClients().subscribe((res: any) => {
      this.clientList = res.data;
    });
  }

  onSaveClient() {
    this.clientService.addUpdate(this.clientObj).subscribe((res: any) => {
      if (res.result) {
        alert('client success');
        this.loadClient();
        this.clientObj = new Client();
      } else {
        alert('no success');
      }
    });
  }

  onEditClient(client: Client) {
    this.clientObj = client;
  }
  onRemoveClient(id: number) {
    const isDelete = confirm('are you sure you want to delete?');
    if (isDelete) {
      this.clientService.deleteClient(id).subscribe(() => {
        this.loadClient();
        this.clientObj = new Client();
      });
    }
  }
  onResetForm() {
    this.clientObj = new Client();
  }
}
