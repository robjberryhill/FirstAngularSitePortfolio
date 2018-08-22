import { Injectable } from '@angular/core';
import { Contact } from '../../../shared/models/contact';
import { Observable, of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  contacts: Contact[] = [
    {
      firstName: 'Luke',
      lastName: 'Skywalker',
      phoneNumber: '1234567890',
      email: 'lsyavin@rebels.com'
    },
    {
      firstName: 'Han',
      lastName: 'Solo',
      phoneNumber: '4561237890',
      email: 'hsyavin@rebels.com'
    },
    {
      firstName: 'Leia',
      lastName: 'Organa',
      phoneNumber: '7891234560',
      email: 'loyavin@rebels.com'
    }
  ];
  newContact = (): Observable<Contact[]> => {
    return of(this.contacts);
  }

  constructor() { }
}
