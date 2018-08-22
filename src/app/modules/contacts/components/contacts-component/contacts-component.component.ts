import { Component, OnInit } from '@angular/core';
import { Contact } from '../../../../shared/models/contact';
import { ContactsService } from '../../services/contacts.service';



@Component({
  selector: 'app-contacts-component',
  templateUrl: './contacts-component.component.html',
  styleUrls: ['./contacts-component.component.css']
})
export class ContactsComponentComponent implements OnInit {
  contacts: Contact[];
  contactDataService: ContactsService; 

  constructor(private contactsService: ContactsService) {
    this.contactDataService = this.contactsService;
   }

  ngOnInit() {
    this.contactDataService.newContact().subscribe(contacts => this.contacts = contacts);
  }
  onSubmit(data) {
    this.contacts.push(data);    
  }

}
