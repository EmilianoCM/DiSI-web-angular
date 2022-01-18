import { NgModule } from '@angular/core';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { PrimeraSeccionComponent } from './primera-seccion/primera-seccion.component';
import { SegundaSeccionComponent } from './segunda-seccion/segunda-seccion.component';
import { TerceraSeccionComponent } from './tercera-seccion/tercera-seccion.component';
import { CuartaSeccionComponent } from './cuarta-seccion/cuarta-seccion.component';




@NgModule({
  declarations:[
    PrimeraSeccionComponent,
    SegundaSeccionComponent,
    TerceraSeccionComponent,
    CuartaSeccionComponent
  ],
  exports: [
    PrimeraSeccionComponent,
    SegundaSeccionComponent,
    TerceraSeccionComponent,
    CuartaSeccionComponent
  ],
  imports:[
    PrimeNgModule
  ]
  
})
export class SeccionesModule { }
