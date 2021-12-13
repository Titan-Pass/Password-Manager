import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Group} from "./group.model";
import {GroupList} from "./group-list.model";

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  private groupsApi = environment.api + 'api/groups'

  constructor(private _http: HttpClient) { }

  getGroups(): Observable<GroupList> {
    return this._http.get<GroupList>(this.groupsApi);
  }

  getGroup(id: number): Observable<Group>{
    return this._http.get<Group>(this.groupsApi + '/' + id);
  }

  update(group: Group): Observable<Group>{
    return this._http.put<Group>(this.groupsApi + '/' + group.id, group);
  }

  add(group: Group): Observable<Group>{
    return this._http.post<Group>(this.groupsApi, group);
  }

  delete(id: number){
    return this._http.delete(this.groupsApi + '/' + id);
  }
}
