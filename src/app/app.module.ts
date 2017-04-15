import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { DetailsPage } from '../pages/details/details';
import { FirstSatPage } from '../pages/first-sat/first-sat';
import { Firstsat } from '../pipes/firstsat';
import { FirstsunPage } from '../pages/firstsun/firstsun';
import { SecsatPage } from '../pages/secsat/secsat';
import { SecsunPage } from '../pages/secsun/secsun';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    DetailsPage,
    FirstSatPage,
    Firstsat,
    FirstsunPage,
    SecsatPage,
    SecsunPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    DetailsPage,
    FirstSatPage,
    FirstsunPage,
    SecsatPage,
    SecsunPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
