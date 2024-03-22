import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { DeleteComponent } from './delete/delete.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OptionDeleteComponent } from './option-delete/option-delete.component';
import { OptionUpdateComponent } from './option-update/option-update.component';
import { OptionReadComponent } from './option-read/option-read.component';
import { ReadComponent } from './read/read.component';
import { SearchComponent } from './search/search.component';
import { UpdateComponent } from './update/update.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    DeleteComponent,
    FooterComponent,
    HomeComponent,
    MainComponent,
    NavbarComponent,
    OptionDeleteComponent,
    OptionUpdateComponent,
    OptionReadComponent,
    ReadComponent,
    SearchComponent,
    UpdateComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
