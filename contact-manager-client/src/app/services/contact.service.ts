import { Injectable } from "@angular/core";
import { Headers, Http, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "../extensions/rxjs-extensions";
import { Contact, IContact } from "../models/contact";
import { Note } from "../models/note";
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
    activePage: number = 0;

    createNote(contactId: number, text: string): Promise<Note> {
        let note = new Note({contactId: contactId, text: text});
        let url = `${this.baseUrl}/notes`;
        return this.http.post(url, JSON.stringify(note), this.jsonHeaders).map(r => <Note>r.json()).toPromise();
    }

    deleteNote(note:Note): Promise<{}> {
        let url = `${this.baseUrl}/notes/${note.id}`;
        return this.http.delete(url).toPromise();
    }

    countPages(): Observable<number> {
        let url = `${this.baseUrl}/contacts/countpages`;
        return this.http.get(url).map(r => r.json());
    }

    getContacts(page: number = 0): Observable<Contact[]> {
        let url = `${this.baseUrl}/contacts/filter/${page}`;
        return this.http.get(url).map(r => r.json().map(item => new Contact(item))).do(() => this.activePage = page);
    }

    updateContact(contact: Contact): Promise<{}> {
        let url = `${this.baseUrl}/contacts/${contact.id}`;
        return this.http.put(url, JSON.stringify(contact), this.jsonHeaders).toPromise();
    }

    createContact(contact: Contact): Promise<{}> {
        let url = `${this.baseUrl}/contacts/`;
        return this.http.post(url, JSON.stringify(contact), this.jsonHeaders).toPromise();
    }

    deleteContact(contact: Contact): Promise<{}> {
        let url = `${this.baseUrl}/contacts/${contact.id}`;
        return this.http.delete(url).toPromise(); 
    }

    loadStates() {
        let url = `${this.baseUrl}/states`;
        this.states$ = this.http.get(url).map(r => r.json());
    }

    private get jsonHeaders() { 
        return new RequestOptions({ headers: new Headers({ "Content-Type": "application/json" })});
    }
} 