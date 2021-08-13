import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapGridComponent } from './map-grid/map-grid.component';
import { MenuSlateComponent } from './menu-slate/menu-slate.component';
import { FreeDraggingDirective } from './directive/free-dragging.directive';
import { FreeDraggingHandleDirective } from './directive/free-dragging-handle.directive';
import { FormsModule } from '@angular/forms';
import { InstructionsComponent } from './components/instructions/instructions.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { MapContainerComponent } from './map-container/map-container.component';


@NgModule({
  declarations: [
    MapGridComponent,
    MenuSlateComponent,
    FreeDraggingDirective,
    FreeDraggingHandleDirective,
    InstructionsComponent,
    AboutMeComponent,
    MapContainerComponent
  ],
  imports: [
    FormsModule,
    CommonModule
  ]
})
export class MapModule { }
