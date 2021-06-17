import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgImageSliderModule } from 'ng-image-slider';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ImageService } from './image.service';


describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        BrowserModule,
        HttpClientTestingModule,
        FormsModule,
        NgImageSliderModule
      ],
      providers: [ImageService]
    }).compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Ng Image Slider'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Ng Image Slider');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Ng Image Slider');
  }));
});
