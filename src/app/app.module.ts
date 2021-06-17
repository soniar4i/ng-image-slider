import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgImageSliderModule } from 'ng-image-slider';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { ImageService } from "./image.service";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        NgImageSliderModule
    ],
    providers: [ImageService],
    bootstrap: [AppComponent]
})
export class AppModule { }
