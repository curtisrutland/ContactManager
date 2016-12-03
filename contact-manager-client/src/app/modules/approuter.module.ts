import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactManagerComponent } from "../components/contact-manager/contact-manager.component";
import { EditContactComponent } from "../components/edit-contact/edit-contact.component";
import { ContactDetailsComponent } from "../components/contact-details/contact-details.component";

const routes: Routes = [
    { path: "", component: ContactManagerComponent, pathMatch: "full" },
    // { path: "manager", component: ContactManagerComponent },
    { path: "edit", component: EditContactComponent },
    { path: "details", component: ContactDetailsComponent },
    { path: "**", redirectTo: ""}
];

@NgModule({ imports: [RouterModule.forRoot(routes)], exports: [RouterModule] })
export class AppRouterModule { }