import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',loadComponent:()=>import('../app/home/home').then(mod=>mod.Home)
    },
    {
        path:'about',loadComponent:()=>import('../app/about/about').then(mod=>mod.About)
    },
    {
        path:'contact',loadComponent:()=>import('../app/contact/contact').then(mod=>mod.Contact)
    },
    {
        path:'project',loadComponent:()=>import('../app/project/project').then(mod=>mod.Project)
    },
    {
        path:'resume',loadComponent:()=>import('../app/resume/resume').then(mod=>mod.Resume)
    }
];
