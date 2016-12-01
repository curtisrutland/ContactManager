import { Component, OnInit, Input } from '@angular/core';
import { Contact } from "../../models/contact";
import { ContactService } from "../../services/contact.service";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditContactComponent } from "../../components/edit-contact/edit-contact.component";

@Component({
  selector: 'contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent implements OnInit {
  @Input() contact: Contact;

  constructor(private contactService: ContactService, private modalService: NgbModal) { }

  ngOnInit() {
  }

  edit() {
    let modalRef = this.modalService.open(EditContactComponent, { size: "lg", backdrop: "static", keyboard: false });
    modalRef.componentInstance.contact = this.contact;
  }
}
