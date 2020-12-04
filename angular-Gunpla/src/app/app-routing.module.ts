import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { GunplasComponent } from './gunplas/gunplas.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'gunplas',
    pathMatch:'full',
  },
  {
    path:'gunplas',
    component:GunplasComponent,
  },
  {
    path:'about',
    component:AboutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
