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
}
