import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routedComponents, UsersRoutingModule } from './users-routing.module';
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';



@NgModule({
  declarations: [
    ...routedComponents
  ],
  imports: [
    CommonModule,
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    Ng2SmartTableModule,
    UsersRoutingModule
  ],
})
export class UsersModule { }
