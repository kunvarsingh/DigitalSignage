import { Component, OnInit } from '@angular/core';
@Component({
	moduleId: module.id,
    selector: 'drop-down-features',
    template: `<div>
<div class="column small-12 large-2">
    <label class="sbw_light">Title:</label><br />
    <select [(ngModel)]="passenger.Title">
       <option *ngFor="let title of titleArray" [value]="title.Value">{{title.Text}}</option>
    </select>
</div>

    </div>`

})
export class DropDownComponent{
constructor(){}

}