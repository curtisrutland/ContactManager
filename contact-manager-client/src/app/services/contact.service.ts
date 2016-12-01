import { Injectable } from "@angular/core";
import { Headers, Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "../extensions/rxjs-extensions";
import { Contact, IContact } from "../models/contact";
import { environment } from "../../environments/environment";
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable()
export class ContactService {
    private get baseUrl() { return environment.apiBaseUrl; }
    constructor(private http: Http) { }

    countPages(): Observable<number> {
        let url = `${this.baseUrl}/contacts/countpages`;
        return this.http.get(url).map(r => r.json());
    }

    getContacts(page: number = 0): Observable<Contact[]> {
        let url = `${this.baseUrl}/contacts/filter/${page}`;
        return this.http.get(url).map(r => r.json().map(item => new Contact(item)));
    }

    showEditContactModal(contact: Contact) {
        
    }
} 