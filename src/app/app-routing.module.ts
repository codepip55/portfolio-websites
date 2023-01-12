import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './shared/components/menu/menu.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'menu', component: MenuComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
