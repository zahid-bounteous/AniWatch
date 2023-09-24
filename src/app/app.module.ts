import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import { CardComponent } from './shared/components/card/card.component';
import { CardListComponent } from './shared/components/card-list/card-list.component';
import { DetailsComponent } from './shared/components/details/details.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { myDataReducer } from './state/reducers/data.reducers';

let appRoute: Routes=[
  {path:"details/:id", component: DetailsComponent},
  {path:"details/:title",component:DetailsComponent},
  {path:"**", component: CardComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    CardListComponent,
    DetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ myData: myDataReducer }),
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

