import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllInstructorComponent } from './all-instructor/all-instructor.component';
import { BlogInnerComponent } from './blog-inner/blog-inner.component';
import { BlogComponent } from './blog/blog.component';
import { BookmarkedBlogComponent } from './bookmarked-blog/bookmarked-blog.component';
import { BundleKitComponent } from './bundle-kit/bundle-kit.component';
import { BundlesKitInnerComponent } from './bundles-kit-inner/bundles-kit-inner.component';
import { CourseOverviewComponent } from './course-overview/course-overview.component';

import { HomeComponent } from './home.component';
import { MyClassesComponent } from './my-classes/my-classes.component';
import { NewsComponent } from './news/news.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { PaymentComponent } from './payment/payment.component';
import { ProfileComponent } from './profile/profile.component';
import { SavedCoursesComponent } from './saved-courses/saved-courses.component';
import { TdcHomeComponent } from './tdc-home/tdc-home.component';
import { WelcomeCheckoutComponent } from './welcome-checkout/welcome-checkout.component';

const routes: Routes = [{ path: '', component: HomeComponent , children:[
  {path: '', component: TdcHomeComponent},
  { path: 'news', component: NewsComponent },
  { path: 'blog_inner', component: BlogInnerComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'bundle_kit', component: BundleKitComponent },
  { path: 'bundle_kit_inner', component: BundlesKitInnerComponent },
  { path: 'all_instructor', component: AllInstructorComponent },
  { path: 'course_overview', component: CourseOverviewComponent },
  { path: 'bookmarked_blog', component: BookmarkedBlogComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'my_courses', component: MyClassesComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'profile_view', component: ProfileComponent },
  { path: 'saved_courses', component: SavedCoursesComponent },
  { path: 'welcome_checkout', component: WelcomeCheckoutComponent },
]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
