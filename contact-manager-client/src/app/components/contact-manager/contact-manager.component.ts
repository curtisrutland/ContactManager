import { Component, OnInit } from '@angular/core';
import { ContactService } from "../../services/contact.service";
import { Contact } from "../../models/contact";
import { Observable } from "rxjs/Observable";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditContactComponent } from "../../components/edit-contact/edit-contact.component";

@Component({
  selector: 'contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.scss']
})
export class ContactManagerComponent implements OnInit {
  contacts$: Observable<Contact[]>;
  contactPages$: Observable<number[]>;
  activePage: number = 0;
  //currentPage: number = 0;

  constructor(private contactService: ContactService, private modalService: NgbModal) { }

  ngOnInit() {
    this.loadPage(0, true);
    // this.contacts$ = this.contactService.getContacts();
    // this.contactPages$ = this.contactService.countPages().map((i: number) => {
    //   var arr = [];
    //   for (let ix = 0; ix < i; ix++) arr.push(ix);
    //   return arr;
    // });
  }

  createNewContact() {
    let modalRef = this.modalService.open(EditContactComponent, { size: "lg", backdrop: "static", keyboard: false });
    let c = new Contact();
    c.firstName = "New";
    c.lastName = "Contact";
    modalRef.componentInstance.contact = c;
    modalRef.componentInstance.isCreateForm = true;
    modalRef.result.then(r => {
      console.log(r);
      if(r) {
        this.loadPage(0, true);
      }
    });
  }

  deleteContact(contact:Contact) {
    bootbox.confirm(`Are you sure you want to delete ${contact.fullName}?`, r => {
      if(r) {
        this.contactService.deleteContact(contact).then(() => this.loadPage(this.activePage, true));
      }
    });
  }

  loadPage(page: number, force: boolean = false){
    if(!force && page == this.activePage) return;
    this.contacts$ = this.contactService.getContacts(page).do(() => this.activePage = page);
    this.contactPages$ = this.contactService.countPages().map((i: number) => {
      var arr = [];
      for (let ix = 0; ix < i; ix++) arr.push(ix);
      return arr;
    });
  }
}
