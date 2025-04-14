import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public router: Router) {}

  canActivate(): boolean {
    const isAdmin = localStorage.getItem('isAdmin') === 'true';
    if (isAdmin) {
      return true;
    } else {
      alert('Acesso negado! Você precisa estar logado como admin');
      this.router.navigate(['/']);
      return false;
    }
  }
}
