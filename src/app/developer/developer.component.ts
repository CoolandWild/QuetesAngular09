import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Developer } from '../comon/developer.model';
import { Skill } from '../comon/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.scss']
})
export class DeveloperComponent implements OnInit {

  myDeveloper : Developer;

  constructor() { }


  ngOnInit(): void {

    const devSkill = new Skill();
    devSkill.name ='angular';
    devSkill.site = 'SuperheroSite@bemyhero';

    this.myDeveloper= new Developer();
    this.myDeveloper.firstName = 'john';
    this.myDeveloper.lastName = 'Doe';
    this.myDeveloper.bio ='Ninja Developer';
    this.myDeveloper.skills =[devSkill];

  }

}
