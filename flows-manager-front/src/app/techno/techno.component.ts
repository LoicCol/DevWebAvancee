import { Component, OnInit } from '@angular/core';
import { TechnoService } from './techno.service';
import { Techno } from './techno'

@Component({
  selector: 'app-techno',
  templateUrl: './techno.component.html',
  styleUrls: ['./techno.component.css']
})
export class TechnoComponent implements OnInit {
  technos: Techno[];

  constructor(private technoService: TechnoService) { }

  getTechnos(): void {
    this.technoService.getTechnos()
        .subscribe(Technos => {
          console.log('YAAAAAAAAAAA', Technos);
          this.technos = Technos
        });
  }

  ngOnInit() {
    this.getTechnos();
  }

}
