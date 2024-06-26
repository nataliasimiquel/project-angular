import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule,
    CommonModule,
    BrowserModule,

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
