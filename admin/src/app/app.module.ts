// Angular Modules
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { RouterModule } from '@angular/router'

// Third party Modules
import { SDKBrowserModule } from '@lb-sdk'

import { ColmenaLayoutModule } from '@colmena/colmena-angular-layout'
import { ColmenaUiModule } from '@colmena/colmena-angular-ui'

// Local Modules
import { AuthModule } from './auth/auth.module'
import { ContentModule } from './content/content.module'
import { DevModule } from './dev/dev.module'
import { SystemModule } from './system/system.module'
import { UiModule } from './ui/ui.module'

// Local Components/Routes/Services
import { AppComponent } from './app.component'
import { appRoutes } from './app.routes'
import { AppService } from './app.service'
import { LogService } from './log.service'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,

    SDKBrowserModule.forRoot(),
    ColmenaLayoutModule,
    ColmenaUiModule,
    UiModule,

    AuthModule,
    ContentModule,
    DevModule,
    SystemModule,

    appRoutes,
  ],
  providers: [
    AppService,
    LogService,
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
