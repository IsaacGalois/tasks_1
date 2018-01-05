
import {HttpClient} from "@angular/common/http";
import {EventEmitter, Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import {Task} from "./task.model";

@Injectable()
export class TaskService {

    onTaskAdded = new EventEmitter<Task>();

    constructor(private http: HttpClient) {

    }

    getTasks(): Observable<any> {
        return this.http.get('/api/tasks');
        // return this.http.get('/api/tasks');
    }

    saveTask(task: Task, checked: boolean) {
        task.completed = checked;
        return this.http.post('api/tasks/save', task);
    }

    addTask(task: Task) { //NOTE: yes this is a duplicate of above but done for clarity in view (ask Dan Vega why)
        return this.http.post('/api/tasks/save',task);
    }
}
