import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from "../../models/contact";
import { ContactService } from "../../services/contact.service";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditContactComponent } from "../../components/edit-contact/edit-contact.component";
import { ContactDetailsComponent } from "../../components/contact-details/contact-details.component";

@Component({
  selector: 'contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent implements OnInit {
  @Input() contact: Contact;
  @Output() deleteClicked: EventEmitter<Contact> = new EventEmitter();

  constructor(private contactService: ContactService, private modalService: NgbModal) { }

  ngOnInit() {
  }

  details() {
    let modalRef = this.modalService.open(ContactDetailsComponent , { size: "lg" });
    modalRef.componentInstance.contact = this.contact;
  }

  edit() {
    let modalRef = this.modalService.open(EditContactComponent, { size: "lg", backdrop: "static", keyboard: false });
    modalRef.componentInstance.contact = this.contact;
  }

  delete() {
    this.deleteClicked.emit(this.contact);
  }
}
