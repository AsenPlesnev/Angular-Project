import { StudentsService } from './students.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';

@Injectable({
    providedIn: 'root'
})

export class EditStudentsResolver implements Resolve<any> {
    constructor(private studentsService: StudentsService) { }

    resolve(route: ActivatedRouteSnapshot) {
        return new Promise((resolve, reject) => {
            let studentId = route.paramMap.get('id');
            this.studentsService.getStudent(studentId)
                .subscribe(data => {
                    resolve(data);
                });
        });
    }
}
