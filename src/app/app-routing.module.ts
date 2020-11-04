import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { RegisterComponent } from './register/register.component';
import { PunishmentComponent } from './punishment/punishment.component';

const routes: Routes = [
  { path: 'todos', component: TodosComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'calc', loadChildren: () => import('./calculator-new/calculator-new.module').then(m => m.CalculatorNewModule)},
  { path: 'lib', loadChildren: () => import('./library-new/library-new.module').then(m => m.LibraryNewModule)},
  { path: 'punishment', component: PunishmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
