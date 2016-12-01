import { Injectable } from "@angular/core";
import { Headers, Http, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "../extensions/rxjs-extensions";
import { Contact, IContact } from "../models/contact";
import { environment } from "../../environments/environment";

import { EditContactComponent } from "../components/edit-contact/edit-contact.component";
import { IState } from "../models/state";

@Injectable()
export class ContactService {
    private get baseUrl() { return environment.apiBaseUrl; }
    constructor(private http: Http) {
        this.loadStates();
    }

    states$: Observable<IState[]>;

    countPages(): Observable<number> {
        let url = `${this.baseUrl}/contacts/countpages`;
        return this.http.get(url).map(r => r.json());
    }

    getContacts(page: number = 0): Observable<Contact[]> {
        let url = `${this.baseUrl}/contacts/filter/${page}`;
        return this.http.get(url).map(r => r.json().map(item => new Contact(item)));
    }

    updateContact(contact: Contact): Promise<{}> {
        let url = `${this.baseUrl}/contacts/${contact.id}`;
        let headers = new Headers({ "Content-Type": "application/json" });
        return this.http.put(url, JSON.stringify(contact), new RequestOptions({headers: headers})).toPromise();
    }

    loadStates() {
        let url = `${this.baseUrl}/states`;
        this.states$ = this.http.get(url).map(r => r.json());
    }
} 