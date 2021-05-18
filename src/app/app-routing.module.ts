import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';

//Aca voy a colocar todas mis rutas
const routes: Routes = [
    // mi prima ruta: 
    {
        //Este es el primer componente
        path: '',
        component: PorPaisComponent,
        pathMatch: 'full'
    },
    //este es otro path
    {
        path: 'region',
        component: PorRegionComponent,
    },
    //este es otro path
    {
        path: 'capital',
        component: PorCapitalComponent,
    },
    //Este es un path especial xq va a cambiar en base al seleccionado
    // 'pais/nombredelpais'
    {
        path: 'pais/:id',
        component: VerPaisComponent
    },

    //Este seria la excepcion, es decir cuando se dirige a uno q no debe
    {
        path: '**',
        redirectTo: ''
        //o se puede mostrar a otro componente de error personalizado
    }
]
@NgModule({
    imports:[ 
        RouterModule.forRoot(routes)
    ],
    exports:[
       RouterModule
    ]
})
export class AppRoutingModule {}