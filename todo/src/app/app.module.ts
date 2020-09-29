import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { CustomPipe } from './pipes/custom.pipe';
import { FamilyComponent } from './family/family.component';

@NgModule({
  declarations: [AppComponent, TodoComponent, CustomPipe, FamilyComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
