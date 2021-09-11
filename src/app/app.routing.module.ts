import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { VideoPageComponent } from './pages/video/video.component';
import { PeoplePageComponent } from './pages/people/people.component';
import { FavoritePageComponent } from './pages/favorite/favorite.component';
import { EventPageComponent } from './pages/event/event.component';
import { DocumentPageComponent } from './pages/document/document.component';
import { CommunityPageComponent } from './pages/community/community.component';
import { ChannelPageComponent } from './pages/channel/channel.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  { path: 'video', component: VideoPageComponent },
  { path: 'people', component: PeoplePageComponent },
  { path: 'document', component: DocumentPageComponent },
  { path: 'event', component: EventPageComponent },
  { path: 'community', component: CommunityPageComponent },
  { path: 'favorite', component: FavoritePageComponent },
  { path: 'channel', component: ChannelPageComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  declarations: [
    VideoPageComponent,
    PeoplePageComponent,
    FavoritePageComponent,
    EventPageComponent,
    DocumentPageComponent,
    CommunityPageComponent,
    ChannelPageComponent
  ],
  imports: [
    FontAwesomeModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
