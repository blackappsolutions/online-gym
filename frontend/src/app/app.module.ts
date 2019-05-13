import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {VideoComponent} from './video/video.component';
import {FileUploadModule} from 'ng2-file-upload';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        VideoComponent
    ],
    imports: [
        FileUploadModule,
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
