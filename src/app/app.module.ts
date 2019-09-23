import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PlacementService } from './placement.service';
import { from } from 'rxjs';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { HeaderComponent } from './header/header.component';
import { AdminfooterComponent } from './adminfooter/adminfooter.component';
import { ApprovestudComponent } from './approvestud/approvestud.component';
import { AdddriveComponent } from './adddrive/adddrive.component';
import { ManagedriveComponent } from './managedrive/managedrive.component';
import { AppliedstudComponent } from './appliedstud/appliedstud.component';
import { EditdriveComponent } from './editdrive/editdrive.component';

const approutes:Routes=[{path:"",component:HomeComponent},
{path:"login",component:LoginComponent},
{path:"adminhome",component:AdminhomeComponent},
{path:"userhome",component:UserhomeComponent},
{path:"adddrive",component:AdddriveComponent},
{path:"managedrive",component:ManagedriveComponent},
{path:"editdrive",component:EditdriveComponent}]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AdminhomeComponent,
    UserhomeComponent,
    HeaderComponent,
    AdminfooterComponent,
    ApprovestudComponent,
    AdddriveComponent,
    ManagedriveComponent,
    AppliedstudComponent,
    EditdriveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(approutes),
    HttpClientModule
  ],
  providers: [PlacementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
