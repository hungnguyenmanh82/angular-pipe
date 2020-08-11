import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DateComponent } from './date/date.component';
import { UserPipeComponent } from './user-pipe/user-pipe.component';
import { ExponentialStrengthPipe } from './exponential-strength.pipe';
import { FlyingHeroesPipe, FlyingHeroesImpurePipe } from './flying-heroes.pipe';
import { PipePureComponent } from './pipe-pure/pipe-pure.component';
import { PipeImpureComponent } from './pipe-impure/pipe-impure.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    DateComponent,
    UserPipeComponent,
    ExponentialStrengthPipe,
    PipePureComponent,
    PipeImpureComponent,
    FlyingHeroesPipe,
    FlyingHeroesImpurePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
