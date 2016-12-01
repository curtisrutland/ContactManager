import { Component, Input } from '@angular/core';

@Component({
  selector: 'drop-toggle',
  templateUrl: './drop-toggle.component.html',
  styleUrls: ['./drop-toggle.component.scss']
})
export class DropToggleComponent {
  @Input() collapsed: boolean;
}
