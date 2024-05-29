import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {
        path: '',
        title: "Wesley Montserrat",
        component: AboutComponent
    },
    {
        path: 'contact',
        title: "Contact",
        component: ContactComponent
    }
];
