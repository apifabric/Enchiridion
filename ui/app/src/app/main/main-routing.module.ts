import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
        { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
        { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
      
    
        { path: 'BehavioralPattern', loadChildren: () => import('./BehavioralPattern/BehavioralPattern.module').then(m => m.BehavioralPatternModule) },
    
        { path: 'Business', loadChildren: () => import('./Business/Business.module').then(m => m.BusinessModule) },
    
        { path: 'BusinessInsight', loadChildren: () => import('./BusinessInsight/BusinessInsight.module').then(m => m.BusinessInsightModule) },
    
        { path: 'ConsumerPreference', loadChildren: () => import('./ConsumerPreference/ConsumerPreference.module').then(m => m.ConsumerPreferenceModule) },
    
        { path: 'Event', loadChildren: () => import('./Event/Event.module').then(m => m.EventModule) },
    
        { path: 'Insight', loadChildren: () => import('./Insight/Insight.module').then(m => m.InsightModule) },
    
        { path: 'Neighborhood', loadChildren: () => import('./Neighborhood/Neighborhood.module').then(m => m.NeighborhoodModule) },
    
        { path: 'PreferenceCategory', loadChildren: () => import('./PreferenceCategory/PreferenceCategory.module').then(m => m.PreferenceCategoryModule) },
    
        { path: 'Report', loadChildren: () => import('./Report/Report.module').then(m => m.ReportModule) },
    
        { path: 'Story', loadChildren: () => import('./Story/Story.module').then(m => m.StoryModule) },
    
        { path: 'User', loadChildren: () => import('./User/User.module').then(m => m.UserModule) },
    
        { path: 'UserInteraction', loadChildren: () => import('./UserInteraction/UserInteraction.module').then(m => m.UserInteractionModule) },
    
        { path: 'ZipCodeDatum', loadChildren: () => import('./ZipCodeDatum/ZipCodeDatum.module').then(m => m.ZipCodeDatumModule) },
    
        { path: 'ZipCodeReport', loadChildren: () => import('./ZipCodeReport/ZipCodeReport.module').then(m => m.ZipCodeReportModule) },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }