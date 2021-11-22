import { registerLocaleData } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';

import localeFr from '@angular/common/locales/pt-PT';
import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { MatPaginatorIntlBr } from './components/material/MatPaginatorIntlBr';
import { httpAsyncFactory } from './factories/http-async/http-async.factory';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginModule } from './pages/login/login.module';
import { HttpAsyncService } from './services/http-async/http-async.service';
import { Interceptor } from './utils/interceptor';

registerLocaleData(localeFr, 'pt-PT');

@NgModule({
  imports: [
    HttpClientModule,
    BrowserAnimationsModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    MatProgressSpinnerModule,
    LoginModule,
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
  ],
  providers: [
    { provide: HttpAsyncService, useFactory: httpAsyncFactory, deps: [HttpClient] },
    { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true },
    { provide: MatPaginatorIntl, useClass: MatPaginatorIntlBr },
  ],
  bootstrap: [
    AppComponent,
  ]
})

export class AppModule {
}
