import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { ShowStudentComponent } from './show-student/show-student.component';

const routes: Routes = [

  {
   component:AddStudentComponent,
   path:'addStudent'
  },
  {
    component:ShowStudentComponent,
    path:'showStudent'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
