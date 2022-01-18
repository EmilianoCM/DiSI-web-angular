import { NgModule } from '@angular/core';

import {OrganizationChartModule} from 'primeng/organizationchart';
import {ImageModule} from 'primeng/image';
import {MenubarModule} from 'primeng/menubar';
import {FieldsetModule} from 'primeng/fieldset';



@NgModule({
  exports: [
    OrganizationChartModule,
    ImageModule,
    MenubarModule,
    FieldsetModule
  ]
})
export class PrimeNgModule { }
