import { TestBed, async } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterLinkDirectiveStub } from './router-link-directive-stub';

@Component({selector: 'app-messages', template: ''})
class AppMessagesStubComponent {}

@Component({selector: 'router-outlet', template: ''})
class RouterOutletStubComponent { }

fdescribe('AppComponent', () => {
  let fixture;
  let app;
  let linkDes;
  let routerLinks;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        AppMessagesStubComponent,
        RouterOutletStubComponent,
        RouterLinkDirectiveStub
      ],
    }).compileComponents();
  
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;

    fixture.detectChanges(); // trigger initial data binding

    // find DebugElements with an attached RouterLinkDirectiveStub
    linkDes = fixture.debugElement.queryAll(By.directive(RouterLinkDirectiveStub));

    // get attached link directive instances
    // using each DebugElement's injector
    routerLinks = linkDes.map(de => de.injector.get(RouterLinkDirectiveStub));
  }));
  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Tour of Heroes'`, async(() => {
    expect(app.title).toEqual('Tour of Heroes');
  }));

  it('can get RouterLinks from template', () => {
    expect(routerLinks.length).toBe(2, 'should have 3 routerLinks');
    expect(routerLinks[0].linkParams).toBe('/dashboard');
    expect(routerLinks[1].linkParams).toBe('/heroes');
  });

  it('can click heroes link in template', () => {
    const heroesLinkDe = linkDes[1];   // heroes link DebugElement
    const heroesLink = routerLinks[1]; // heroes link directive

    expect(heroesLink.navigatedTo).toBeNull('should not have navigated yet');

    heroesLinkDe.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(heroesLink.navigatedTo).toBe('/heroes');
  });
});
