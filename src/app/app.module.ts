import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { HeaderComponent } from './01-basics/header/header.component';
import { RecipesComponent } from './01-basics/header/recipes/recipes.component';
import { RecipeDetailComponent } from './01-basics/header/recipes/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './01-basics/header/recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './01-basics/header/recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './01-basics/header/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './01-basics/header/shopping-list/shopping-edit/shopping-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    Demo1Component,
    Demo2Component,
    HeaderComponent,
    RecipesComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
