import { CustomCheckboxModule } from './custom-checkbox/custom-checkbox.module';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ModuleWithProviders} from '@angular/core/src/metadata/ng_module';
import {CityPipe} from './pipes/city.pipe';
import { TabsModule } from './tabs/tabs.module';
import { TabComponent } from './components/tab/tab.component';
import { TabbedPaneComponent } from './components/tabbed-pane/tabbed-pane.component';
import { ClickOutsideDirective } from './directives/click-outside.directive';

@NgModule({
  imports: [
    CommonModule,
    CustomCheckboxModule,
    TabsModule
  ],
  declarations: [
    CityPipe,
    TabComponent,
    TabbedPaneComponent,
    ClickOutsideDirective,
  ],
  exports: [
    CityPipe,
    CustomCheckboxModule,
    TabsModule,
    TabComponent,
    TabbedPaneComponent,
    ClickOutsideDirective
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []
    }
  }

  static forChild(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []
    }
  }

}
