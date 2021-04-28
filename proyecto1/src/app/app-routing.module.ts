import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValparaisoComponent } from '../app/components/valparaiso/valparaiso.component';
import { MetropolitanaComponent } from '../app/components/metropolitana/metropolitana.component';
import { BiobioComponent } from '../app/components/biobio/biobio.component';
import { AraucaniaComponent } from '../app/components/araucania/araucania.component';

const routes: Routes = [
  {path:'valparaiso',component:ValparaisoComponent},
  {path:'metropolitana',component:MetropolitanaComponent},
  {path:'biobio',component:BiobioComponent},
  {path:'araucania',component:AraucaniaComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
