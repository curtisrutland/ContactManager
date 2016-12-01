import { Component, OnInit } from '@angular/core';
import { ContactService } from "../../services/contact.service";
import { Contact } from "../../models/contact";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.scss']
})
export class ContactManagerComponent implements OnInit {
  contacts$: Observable<Contact[]>;
  contactPages$: Observable<number[]>;
  currentPage: number = 0;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contacts$ = this.contactService.getContacts();
    this.contactPages$ = this.contactService.countPages().map((i: number) => {
      var arr = [];
      for (let ix = 0; ix < i; ix++) arr.push(ix);
      return arr;
    });
  }

  loadPage(page: number){
    if(page == this.currentPage) return;
    this.contacts$ = this.contactService.getContacts();
    this.currentPage = page;
  }
}
