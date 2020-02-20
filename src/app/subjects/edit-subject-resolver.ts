import { SubjectService } from './subject.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';

@Injectable({
    providedIn: 'root'
})

export class EditSubjectResolver implements Resolve<any> {
    constructor(private subjectService: SubjectService) { }

    resolve(route: ActivatedRouteSnapshot) {
        return new Promise((resolve, reject) => {
            let subjectId = route.paramMap.get('id');
            this.subjectService.getSubject(subjectId)
                .subscribe(data => {
                    resolve(data);
                });
        });
    }
}
