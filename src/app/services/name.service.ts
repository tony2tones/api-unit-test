import { Injectable } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Name } from "../response/nameresponse.model";

const Names: Name[] = [
  { name: "Tony" },
  { name: "Phil" },
  { name: "Andrea" },
  { name: "Donny" },
  { name: "Ryan" }
];

@Injectable()
export class NameMockService {
  constructor(private http: HttpClientModule) {}

  getNamespaces(): Observable<Name[]> {
    return Observable.of<Name[]>(Names);
  }
}
