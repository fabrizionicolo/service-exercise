import { Component, OnInit } from '@angular/core';
import { ModuleService } from '../services/module.service';

@Component({
  selector: 'app-also-other-module',
  templateUrl: './also-other-module.component.html',
  styleUrls: ['./also-other-module.component.scss']
})
export class AlsoOtherModuleComponent implements OnInit {

  constructor(private moduleService: ModuleService) { }

  ngOnInit(): void {
    console.log(this.moduleService.getValue());
  }

  onClick() {
    this.moduleService.addTenToValue();
    console.log(this.moduleService.getValue());
  }

}
