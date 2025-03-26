import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const localUser = localStorage.getItem('employeeUser');
  const router = inject(Router);
  if (localUser != null) {
    return true;
  } else {
    router.navigateByUrl('login');
    return false;
  }
};

export const authGuardLoggedIn: CanActivateFn = (route, state) => {
  const localUser = localStorage.getItem('employeeUser');
  const router = inject(Router);
  if (localUser != null) {
    router.navigateByUrl('master');
    return false;
  } else {
    return true;
  }
};
