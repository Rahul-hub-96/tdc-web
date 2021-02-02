import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllInstructorComponent } from './all-instructor/all-instructor.component';
import { BlogInnerComponent } from './blog-inner/blog-inner.component';
import { BlogComponent } from './blog/blog.component';
import { BundleKitComponent } from './bundle-kit/bundle-kit.component';
import { BundlesKitInnerComponent } from './bundles-kit-inner/bundles-kit-inner.component';
import { CourseOverviewComponent } from './course-overview/course-overview.component';

import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { NewsComponent } from './news/news.component';
import { TdcHomeComponent } from './tdc-home/tdc-home.component';

const routes: Routes = [{ path: '', component: HomeComponent , children:[
  {path: '', component: TdcHomeComponent},
  { path: 'news', component: NewsComponent },
  { path: 'blog_inner', component: BlogInnerComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'bundle_kit', component: BundleKitComponent },
  { path: 'bundle_kit_inner', component: BundlesKitInnerComponent },
  { path: 'all_instructor', component: AllInstructorComponent },
  { path: 'course_overview', component: CourseOverviewComponent },
  { path: 'login', component: LoginComponent }
]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
