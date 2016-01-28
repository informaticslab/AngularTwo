import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {PageOneComponent} from './page-one/page-one.component';
import {PageTwoComponent} from './page-two/page-two.component';

@Component({
    selector: 'my-app',
    template: `
  <h1>Component Router</h1>
  <nav>
    <a [routerLink]="['PageOne']">Page One</a>
    <a [routerLink]="['PageTwo']">Page Two</a>
  </nav>
  <router-outlet></router-outlet>
`,providers:  [],
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    {path:'/page-one', name: 'PageOne', component: PageOneComponent},
    {path:'/page-two', name: 'PageTwo', component: PageTwoComponent}
])
export class AppComponent { }
