import { NgModule } from '@angular/core';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { PrimeraSeccionComponent } from './primera-seccion/primera-seccion.component';
import { SegundaSeccionComponent } from './segunda-seccion/segunda-seccion.component';
import { TerceraSeccionComponent } from './tercera-seccion/tercera-seccion.component';
import { CuartaSeccionComponent } from './cuarta-seccion/cuarta-seccion.component';
import { QuintaSeccionComponent } from './quinta-seccion/quinta-seccion.component';
import { SextaSeccionComponent } from './sexta-seccion/sexta-seccion.component';




@NgModule({
  declarations:[
    PrimeraSeccionComponent,
    SegundaSeccionComponent,
    TerceraSeccionComponent,
    CuartaSeccionComponent,
    QuintaSeccionComponent,
    SextaSeccionComponent
  ],
  exports: [
    PrimeraSeccionComponent,
    SegundaSeccionComponent,
    TerceraSeccionComponent,
    CuartaSeccionComponent,
    QuintaSeccionComponent,
    SextaSeccionComponent
  ],
  imports:[
    PrimeNgModule
  ]
  
})
export class SeccionesModule { }
