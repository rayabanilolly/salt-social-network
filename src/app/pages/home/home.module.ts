import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePageComponent } from './home.component';
import { HomePageRoutingModule } from './home-routing.module';
import { MainSectionComponent } from '../../components/section/section.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MainSectionPlusComponent } from '../../components/section-plus/section-plus.component';
import { VideoService } from '../../services/video.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HomePageRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  declarations: [
    HomePageComponent,
    MainSectionComponent,
    MainSectionPlusComponent
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [VideoService]
})
export class HomePageModule {}
