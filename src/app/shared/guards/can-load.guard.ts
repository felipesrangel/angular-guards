import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanLoadGuard implements CanLoad {
  canLoad(
    route: Route,
    segments: UrlSegment[]): 
    | Observable<boolean 
    | UrlTree> 
    | Promise<boolean 
    | UrlTree> 
    | boolean 
    | UrlTree {

      if(segments[1]?.path === 'leads'){
        console.log(route);
        console.log(segments);
        return true;
      }
    alert('Modulo não foi carregado')
    console.log(route);
    console.log(segments);
    return false;
  }
}
