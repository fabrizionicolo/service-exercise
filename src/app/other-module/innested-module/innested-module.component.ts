import { Component, OnInit } from '@angular/core';
import { ModuleService } from 'src/app/services/module.service';

@Component({
  selector: 'app-innested-module',
  templateUrl: './innested-module.component.html',
  styleUrls: ['./innested-module.component.scss']
})
export class InnestedModuleComponent implements OnInit {

  constructor(private moduleService: ModuleService) { }

  ngOnInit(): void {
    console.log(this.moduleService.getValue());
  }

}
