import { MenuRootItem } from 'ontimize-web-ngx';

import { BehavioralPatternCardComponent } from './BehavioralPattern-card/BehavioralPattern-card.component';

import { BusinessCardComponent } from './Business-card/Business-card.component';

import { BusinessInsightCardComponent } from './BusinessInsight-card/BusinessInsight-card.component';

import { ConsumerPreferenceCardComponent } from './ConsumerPreference-card/ConsumerPreference-card.component';

import { EventCardComponent } from './Event-card/Event-card.component';

import { InsightCardComponent } from './Insight-card/Insight-card.component';

import { NeighborhoodCardComponent } from './Neighborhood-card/Neighborhood-card.component';

import { PreferenceCategoryCardComponent } from './PreferenceCategory-card/PreferenceCategory-card.component';

import { ReportCardComponent } from './Report-card/Report-card.component';

import { StoryCardComponent } from './Story-card/Story-card.component';

import { UserCardComponent } from './User-card/User-card.component';

import { UserInteractionCardComponent } from './UserInteraction-card/UserInteraction-card.component';

import { ZipCodeDatumCardComponent } from './ZipCodeDatum-card/ZipCodeDatum-card.component';

import { ZipCodeReportCardComponent } from './ZipCodeReport-card/ZipCodeReport-card.component';


export const MENU_CONFIG: MenuRootItem[] = [
    { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
    
    {
    id: 'data', name: ' data', icon: 'remove_red_eye', opened: true,
    items: [
    
        { id: 'BehavioralPattern', name: 'BEHAVIORALPATTERN', icon: 'view_list', route: '/main/BehavioralPattern' }
    
        ,{ id: 'Business', name: 'BUSINESS', icon: 'view_list', route: '/main/Business' }
    
        ,{ id: 'BusinessInsight', name: 'BUSINESSINSIGHT', icon: 'view_list', route: '/main/BusinessInsight' }
    
        ,{ id: 'ConsumerPreference', name: 'CONSUMERPREFERENCE', icon: 'view_list', route: '/main/ConsumerPreference' }
    
        ,{ id: 'Event', name: 'EVENT', icon: 'view_list', route: '/main/Event' }
    
        ,{ id: 'Insight', name: 'INSIGHT', icon: 'view_list', route: '/main/Insight' }
    
        ,{ id: 'Neighborhood', name: 'NEIGHBORHOOD', icon: 'view_list', route: '/main/Neighborhood' }
    
        ,{ id: 'PreferenceCategory', name: 'PREFERENCECATEGORY', icon: 'view_list', route: '/main/PreferenceCategory' }
    
        ,{ id: 'Report', name: 'REPORT', icon: 'view_list', route: '/main/Report' }
    
        ,{ id: 'Story', name: 'STORY', icon: 'view_list', route: '/main/Story' }
    
        ,{ id: 'User', name: 'USER', icon: 'view_list', route: '/main/User' }
    
        ,{ id: 'UserInteraction', name: 'USERINTERACTION', icon: 'view_list', route: '/main/UserInteraction' }
    
        ,{ id: 'ZipCodeDatum', name: 'ZIPCODEDATUM', icon: 'view_list', route: '/main/ZipCodeDatum' }
    
        ,{ id: 'ZipCodeReport', name: 'ZIPCODEREPORT', icon: 'view_list', route: '/main/ZipCodeReport' }
    
    ] 
},
    
    { id: 'settings', name: 'Settings', icon: 'settings', route: '/main/settings'}
    ,{ id: 'about', name: 'About', icon: 'info', route: '/main/about'}
    ,{ id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];

export const MENU_COMPONENTS = [

    BehavioralPatternCardComponent

    ,BusinessCardComponent

    ,BusinessInsightCardComponent

    ,ConsumerPreferenceCardComponent

    ,EventCardComponent

    ,InsightCardComponent

    ,NeighborhoodCardComponent

    ,PreferenceCategoryCardComponent

    ,ReportCardComponent

    ,StoryCardComponent

    ,UserCardComponent

    ,UserInteractionCardComponent

    ,ZipCodeDatumCardComponent

    ,ZipCodeReportCardComponent

];