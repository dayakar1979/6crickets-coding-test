import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeadlineComponent } from './deadline/deadline.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { DeadlineService } from './deadline.service';

@NgModule({
  declarations: [
    AppComponent,
    DeadlineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [provideHttpClient(withInterceptorsFromDi()), DeadlineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
