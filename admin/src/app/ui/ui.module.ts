import { UiService } from './ui.service'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'

import { ColmenaLayoutModule } from '@colmena/colmena-angular-layout'
import { ColmenaUiModule } from '@colmena/colmena-angular-ui'
import { ToastyService, ToastyModule } from 'ng2-toasty'

import { SimpleLayoutComponent } from './layouts/simple-layout.component'
import { FullLayoutComponent } from './layouts/full-layout.component'

import { UiCrudDetailsComponent } from './crud-details/ui-crud-details.component'
import { UiCrudFormComponent } from './crud-form/ui-crud-form.component'
import { UiCrudListComponent } from './crud-list/ui-crud-list.component'
import { UiFormComponent } from './form/ui-form.component'
import { UiLogoComponent } from './logo/logo.component'
import { UiMessageComponent } from './message/message.component'
import { UiTableComponent } from './table/ui-table.component'

const components = [
  FullLayoutComponent,
  SimpleLayoutComponent,
  UiCrudDetailsComponent,
  UiCrudFormComponent,
  UiCrudListComponent,
  UiFormComponent,
  UiLogoComponent,
  UiMessageComponent,
  UiTableComponent,
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ColmenaLayoutModule,
    ColmenaUiModule,
    ToastyModule.forRoot()
  ],
  declarations: [
    ...components,
  ],
  exports: [
    ...components,
    ToastyModule,
  ],
  providers: [
    UiService,
    ToastyService,
  ]
})
export class UiModule {
}
