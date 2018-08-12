import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';


import {HomeResolver} from './home/home.resolver';
import { AppComponent } from './app.component';
import { BackgroundComponent } from './background/background.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ThreeComponentComponent } from './three-component/three-component.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' , resolve: [HomeResolver]},
  { path: 'REstORinG', loadChildren: './otherComponents/otherComponents.module#OtherComponentsModule'},
  { path: '**' , redirectTo: ''}
];



@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    MenuComponent,
    HomeComponent,
    ThreeComponentComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: () => {
      return () => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve();
          }, 5000);
        });
      };
    },
    multi: true
  }, HomeResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
