import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FullLayoutComponent } from './layouts/full-layout/full-layout.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { DirectivesDemoComponent } from './directives-demo/directives-demo.component';
import { AuthGuard } from './core/guards/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: FullLayoutComponent,
    children: [
      {
        path: 'dashboard', // any name to the path
        // component: DashboardComponent, // simple routing
        loadChildren: () => import('./dashboard/dashboard.module').then(x => x.DashboardModule)
      },

      {
        path: 'pipes-demo', // any name to the path
        loadChildren: () => import('./pipes-demo/pipes-demo.module').then(x => x.PipesDemoModule)

      },
      {
        path: 'typescript-demo', // any name to the path
        loadChildren: () => import('./typescript-demo/typescript-demo.module').then(x => x.TypescriptDemoModule)

      },

      {
        path: 'data-binding-demo', // any name to the path
        component: DataBindingComponent
      },
      {
        path: 'directives-demo', // any name to the path
        component: DirectivesDemoComponent

      },
      {
        path: 'material-demo', // any name to the path
        loadChildren: () => import('./material/material.module').then(x => x.MaterialModule)

      },
      {
        path: 'flex-demo', // any name to the path
        loadChildren: () => import('./flex-demo/flex-demo.module').then(x => x.FlexDemoModule)

      },
      {
        path: 'parent-demo', // any name to the path
        loadChildren: () => import('./parent-demo/parent-demo.module').then(x => x.ParentDemoModule)

      },
      {
        path: 'observables-demo', // any name to the path
        loadChildren: () => import('./observables-demo/observables-demo.module').then(x => x.ObservablesDemoModule)

      },
      {
        path: 'promises-demo', // any name to the path
        canLoad: [AuthGuard],
        canDeactivate: [AuthGuard],
        loadChildren: () => import('./promises-demo/promises-demo.module').then(x => x.PromisesDemoModule)

      },
      {
        path: 'services-demo', // any name to the path
        canLoad: [AuthGuard],
        loadChildren: () => import('./services-demo/services-demo.module').then(x => x.ServicesDemoModule)

      },
      {
        path: '',
        redirectTo: 'typescript-demo',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: '',
    component: BlankLayoutComponent,
    children: [
      {
        path: '', // any name to the path
        loadChildren: () => import('./user/user.module').then(x => x.UserModule)

      },
      {
        path: '**',
        redirectTo: 'login'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'login'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

// Why use module ?

//  1: Registration purpose /components, modules, pipes, directives, libraries, 
//  2: Configuring Routing 
