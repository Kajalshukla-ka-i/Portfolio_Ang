import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillsComponent } from './skills/skills.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectComponent } from './project/project.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
const routes: Routes = [
{path : 'about-us',component :AboutComponent},
{path : 'skills',component:SkillsComponent},
{path : 'contact',component:ContactComponent},
{path : 'project',component:ProjectComponent},
{path:'',redirectTo:'',pathMatch:'full'},
{path:'**',component :PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
