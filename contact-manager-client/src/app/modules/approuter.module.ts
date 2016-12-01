import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactManagerComponent } from "../components/contact-manager/contact-manager.component";
import { EditContactComponent } from "../components/edit-contact/edit-contact.component";

const routes: Routes = [
    { path: "", redirectTo: "/manager", pathMatch: "full" },
    { path: "manager", component: ContactManagerComponent },
    { path: "edit", component: EditContactComponent }
];

@NgModule({ imports: [RouterModule.forRoot(routes)], exports: [RouterModule] })
export class AppRouterModule { }