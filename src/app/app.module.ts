import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import {ServerComponent} from "./server/server.component";
import { ServersComponent } from './servers/servers.component';
import { WarningComponent } from './warning/warning.component';
import { SuccessComponent } from './success/success.component';
import { LoginComponent } from './login/login.component';
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponent } from './game-control/odd/odd.component';
import { EvenComponent } from './game-control/even/even.component';
import { NumberComponent } from './game-control/number/number.component';
import { BasicHighlightDirective } from './directives/basic-highlight.directive';
import { BetterUseHighlightDirective } from './directives/better-use-highlight.directive';
import { UnlessDirective } from './directives/unless.directive';
import {AccountComponent} from "./account/account.component";
import {NewAccountComponent} from "./new-account/new-account.component";
import {AccountService} from "./services/account.service";
import {LoggingService} from "./services/logging.service";
import {ActiveUsersComponent} from "./active-users/active-users.component";
import {InactiveUsersComponent} from "./inactive-users/inactive-users.component";

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningComponent,
    SuccessComponent,
    LoginComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    NumberComponent,
    BasicHighlightDirective,
    BetterUseHighlightDirective,
    UnlessDirective,
    AccountComponent,
    NewAccountComponent,
    ActiveUsersComponent,
    InactiveUsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
