import { RouterLinkDirectiveStub } from './router-link-directive-stub';
import { AppModule } from './app.module';
import { NgModule } from '@angular/core';
/**
 * Needed so that `aot` build is working. But it isn't used throughout our tests and/or app.
 */
@NgModule({
    imports: [
        AppModule
    ],
    declarations: [
        RouterLinkDirectiveStub
    ]
})
export class FakeRouterModule {
}