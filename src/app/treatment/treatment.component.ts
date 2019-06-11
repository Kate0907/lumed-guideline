import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Treatment } from '../treatment';
import { TreatmentService } from '../treatment.service';

@Component({
  selector: 'app-treatment',
  templateUrl: './treatment.component.html',
  styleUrls: ['./treatment.component.css']
})
export class TreatmentComponent implements OnInit {
  @Input() treatment: Treatment;

  constructor(
    private route: ActivatedRoute,
    private treatmentService: TreatmentService,
    private location: Location
    ) {}
    
    ngOnInit(): void {
      this.getTreatment();
    }
    getTreatment(): void {
      const id = +this.route.snapshot.paramMap.get('id');
      console.log(id);
      this.treatmentService.getTreatment(id)
        .subscribe(treatment => this.treatment = treatment);
    }
  
    goBack(): void {
      this.location.back();
    }

}
