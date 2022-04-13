import { NgModule } from '@angular/core';
import { DashComponent } from './dash/dash.component';
import { NextRoutingModule } from './next-routing.module';

@NgModule({
    imports: [
        NextRoutingModule
    ],
    declarations:[
        DashComponent
    ]
})
export class NextModule{

}