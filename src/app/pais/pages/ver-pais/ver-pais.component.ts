import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  // Con el "!" le digo a typescript q por el momento va a ser null
  pais!: Country;

  constructor(
    private activatedRoute:ActivatedRoute,
    private paisService:PaisService
    ) { }

  ngOnInit(): void {

    this.activatedRoute.params
    .pipe(
      //SwitchMap devuelve un observable y devuelve otro observable
      switchMap((params) => this.paisService.getPaisByAlpha(params.id)),
      tap(console.log)
      )
    .subscribe(pais => this.pais = pais)


  //   this.activatedRoute.params
  //   .subscribe(({id}) => {
  //     console.log(id);

  //     this.paisService.getPaisByAlpha(id)
  //     .subscribe(pais => {
  //       console.log(pais);
  //     })
      
  //   })
  }

}
