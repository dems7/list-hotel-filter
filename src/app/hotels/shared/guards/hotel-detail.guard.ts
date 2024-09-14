import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelDetailGuard implements CanActivate {
  constructor(private router : Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      //implementation de la logique de notre protection
      //sauvegarder l'id 
      const id = Number(route.url[1].path);

      if (isNaN(id) || id <=0) {
        alert("l'hotel avec l'id : "+id+" n'éxiste pas");
        this.router.navigateByUrl("/hotels");
        return false;
      }
    return true;
  }
  
}
