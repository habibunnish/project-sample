import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './users/home-page/home-page.component';


const routes: Routes = [
  { path: '', redirectTo: 'home-page', pathMatch: 'full' },
  // { path: 'home-page', component: HomePageComponent },
  
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },

  {
    path: 'book-details-new',
    loadChildren: () =>
      import('./book-details-new/book-details-new.module').then(
        (m) => m.BookDetailsNewModule
      ),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./users/users.module').then((m) => m.UsersModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
