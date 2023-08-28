import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {InlineSVGModule} from 'ng-inline-svg-2';
import {LayoutScrollTopComponent} from './scroll-top/scroll-top.component';
import {NgModule} from '@angular/core';
import {NotificationsInnerComponent} from './dropdown-inner/notifications-inner/notifications-inner.component';
import {QuickLinksInnerComponent} from './dropdown-inner/quick-links-inner/quick-links-inner.component';
import {RouterModule} from '@angular/router';
import {SearchResultInnerComponent} from "./dropdown-inner/search-result-inner/search-result-inner.component";
import { SharedModule } from "../../../shared/shared.module";
import {TranslationModule} from '../../../../modules/i18n';
import {UserInnerComponent} from './dropdown-inner/user-inner/user-inner.component';

@NgModule({
  declarations: [
    NotificationsInnerComponent,
    QuickLinksInnerComponent,
    SearchResultInnerComponent,
    UserInnerComponent,
    LayoutScrollTopComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    InlineSVGModule,
    RouterModule,
    TranslationModule,
    SharedModule
  ],
  exports: [
    NotificationsInnerComponent,
    QuickLinksInnerComponent,
    SearchResultInnerComponent,
    UserInnerComponent,
    LayoutScrollTopComponent,
  ],
})
export class ExtrasModule {
}
