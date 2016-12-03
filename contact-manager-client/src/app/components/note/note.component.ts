import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Note } from "../../models/note";

@Component({
  selector: 'note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  @Input() note: Note;
  @Output() deleteNote =new EventEmitter();

  get text() { return this.note.text; }
  get timestamp() { return this.note.createdOnText; }

  constructor() { }

  ngOnInit() {
  }

  delete() {
    this.deleteNote.emit();
  }

}
