import { DrawersModule, DropdownMenusModule } from '../partials';
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { ContentComponent } from './components/content/content.component';
import { ExtrasModule } from '../partials/layout/extras/extras.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderMenuComponent } from './components/header/header-menu/header-menu.component';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { LayoutComponent } from './layout.component';
import { NavbarComponent } from './components/header/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { PageTitleComponent } from './components/header/page-title/page-title.component';
import { Routing } from '../../pages/routing';
import { ScriptsInitComponent } from './components/scripts-init/scripts-init.component';
import { SharedModule } from '../shared/shared.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidebarFooterComponent } from './components/sidebar/sidebar-footer/sidebar-footer.component';
import { SidebarLogoComponent } from './components/sidebar/sidebar-logo/sidebar-logo.component';
import { SidebarMenuComponent } from './components/sidebar/sidebar-menu/sidebar-menu.component';
import { ThemeModeModule } from '../partials/layout/theme-mode-switcher/theme-mode.module';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationModule } from '../../modules/i18n';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: Routing,
  },
];

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    ScriptsInitComponent,
    PageTitleComponent,
    HeaderMenuComponent,
    SidebarComponent,
    SidebarLogoComponent,
    SidebarMenuComponent,
    SidebarFooterComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TranslationModule,
    InlineSVGModule,
    ExtrasModule,
    DrawersModule,
    DropdownMenusModule,
    TranslateModule,
    ThemeModeModule,
    SharedModule,
  ],
  exports: [RouterModule],
})
export class LayoutModule {}
