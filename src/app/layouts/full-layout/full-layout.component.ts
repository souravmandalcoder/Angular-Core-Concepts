import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-full-layout',
  templateUrl: './full-layout.component.html',
  styleUrls: ['./full-layout.component.scss']
})
export class FullLayoutComponent implements OnInit {

  menu: Menu[] = [
    {
      name: 'Pipes Demo',
      value: 'pipes-demo'
    },
    {
      name: 'Dashboard',
      value: 'dashboard'
    },
    {
      name: 'Typescript Demo',
      value: 'typescript-demo'
    },
    {
      name: 'Data-binding Demo',
      value: 'data-binding-demo'
    },
    {
      name: 'Directives Demo',
      value: 'directives-demo'
    },
    {
      name: 'Material Demo',
      value: 'material-demo'
    },
    {
      name: 'Flex Demo',
      value: 'flex-demo'
    },
    {
      name: 'Parent Demo',
      value: 'parent-demo'
    },
    {
      name: 'Observables Demo',
      value: 'observables-demo'
    },
    {
      name: 'Promies Demo',
      value: 'promises-demo'
    },
    {
      name: 'Services Demo',
      value: 'services-demo'
    }


  ];
  // menu: Array<Menu> = [];
  constructor() { }



  ngOnInit() {
  }

}

export class Menu {
  name: string;
  value: string;
}
