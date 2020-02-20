import { EditComponent } from './edit/edit.component';
import { AllComponent } from './all/all.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';



@NgModule({
    declarations: [
        CreateComponent,
        AllComponent,
        EditComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        CreateComponent,
        AllComponent,
        EditComponent,
    ]
})
export class SubjectsModule { }
