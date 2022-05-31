import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModuleService } from '../services/module.service';

@Component({
  selector: 'app-other-module',
  templateUrl: './other-module.component.html',
  styleUrls: ['./other-module.component.scss']
})
export class OtherModuleComponent implements OnInit {

  constructor(private route: ActivatedRoute, private moduleService: ModuleService) { }

  ngOnInit(): void {
    this.route.data
      .subscribe(data => {
        const crisis: string = data.value;
        console.log(crisis);
      });
    
    console.log(this.moduleService.getValue());
  }

  onClick() {
    this.moduleService.addTenToValue();
    console.log(this.moduleService.getValue());
  }
}
