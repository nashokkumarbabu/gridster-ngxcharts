import {Component, Input, OnInit} from '@angular/core';

import { data } from './data';
import { GridsterConfig, GridsterItem }  from 'angular-gridster2';
import {ChartGridOptionModel} from "./chart-grid-option.model";
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';

export const sequential = [
  '#448AFF',
  '#2979FF',
  '#90CAF9',
  '#64B5F6',
  '#42A5F5',
  '#2196F3',
  '#1E88E5',
  '#1976D2',
  '#1565C0',
  '#0D47A1',
  '#82B1FF',
  '#2962FF'
];

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  implements OnInit {
  public gridOptions: ChartGridOptionModel = new ChartGridOptionModel();
  data = data;
  options: GridsterConfig;
  dashboard: Array<GridsterItem>;
  items: MenuItem[];
  colorScheme = { domain: sequential };

  static itemChange(item, itemComponent) { 
    console.info('itemChanged', item, itemComponent);
  }


  

  
  ngOnInit() {
    this.items = [
      {
          label: 'File',
          icon: 'pi pi-fw pi-file',
          items: [{
                  label: 'New', 
                  icon: 'pi pi-fw pi-plus',
                  items: [
                      {label: 'Project'},
                      {label: 'Other'},
                  ]
              },
              {label: 'Open'},
              {separator:true},
              {label: 'Quit'}
          ]
      },
      {
          label: 'Edit',
          icon: 'pi pi-fw pi-pencil',
          items: [
              {label: 'Delete', icon: 'pi pi-fw pi-trash'},
              {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
          ]
      },
      {
          label: 'Help',
          icon: 'pi pi-fw pi-question',
          items: [
              {
                  label: 'Contents'
              },
              {
                  label: 'Search', 
                  icon: 'pi pi-fw pi-search', 
                  items: [
                      {
                          label: 'Text', 
                          items: [
                              {
                                  label: 'Workspace'
                              }
                          ]
                      },
                      {
                          label: 'File'
                      }
              ]}
          ]
      },
      {
          label: 'Actions',
          icon: 'pi pi-fw pi-cog',
          items: [
              {
                  label: 'Edit',
                  icon: 'pi pi-fw pi-pencil',
                  items: [
                      {label: 'Save', icon: 'pi pi-fw pi-save'},
                      {label: 'Update', icon: 'pi pi-fw pi-save'},
                  ]
              },
              {
                  label: 'Other',
                  icon: 'pi pi-fw pi-tags',
                  items: [
                      {label: 'Delete', icon: 'pi pi-fw pi-minus'}
                  ]
              }
          ]
      },
      {separator:true},
      {
          label: 'Quit', icon: 'pi pi-fw pi-times'
      }
  ];

     this.dashboard = [
       {cols:null, rows: null, y: null, x: null},
       {cols:null, rows: null, y: null, x: null},
       {cols: null, rows: null, y:null, x: null}
     ];
  }

}