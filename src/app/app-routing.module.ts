import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NDFSComponent } from './NDFS/NDFS.component';
import { NewNDFFormComponent } from './new-NDF-form/new-NDF-form.component';
import { NDFPageComponent } from './NDF-page/NDF-page.component';
import { NDFSSearchResultsComponent } from './NDFS-search-results/NDFS-search-results.component';

const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'all', component: NDFSComponent },
  { path: 'new', component: NewNDFFormComponent },
  { path: 'detail/:id', component: NDFPageComponent },
  { path: 'search', component: NDFSSearchResultsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
