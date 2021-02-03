import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NewsComponent } from './news/news.component';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomeFooterComponent } from './home-footer/home-footer.component';
import { BlogInnerComponent } from './blog-inner/blog-inner.component';
import { BlogComponent } from './blog/blog.component';
import { TdcHomeComponent } from './tdc-home/tdc-home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BundleKitComponent } from './bundle-kit/bundle-kit.component';
import { BundlesKitInnerComponent } from './bundles-kit-inner/bundles-kit-inner.component';
import { AllInstructorComponent } from './all-instructor/all-instructor.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { FormsModule } from '@angular/forms';
import { CourseOverviewComponent } from './course-overview/course-overview.component';
import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { BookmarkedBlogComponent } from './bookmarked-blog/bookmarked-blog.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { MyClassesComponent } from './my-classes/my-classes.component';

@NgModule({
  declarations: [HomeComponent, NewsComponent, HomeHeaderComponent, HomeFooterComponent, BlogInnerComponent, BlogComponent, TdcHomeComponent, BundleKitComponent, 
    BundlesKitInnerComponent, AllInstructorComponent, CourseOverviewComponent, BookmarkedBlogComponent, NotificationsComponent, MyClassesComponent
    ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    NgbModule,
    IvyCarouselModule,
    NgxDocViewerModule
  ]
})
export class HomeModule { }
