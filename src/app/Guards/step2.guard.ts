import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ValuesService } from '../Services/values.service';

export const step2Guard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const valuesService = inject(ValuesService);
  if (valuesService.model.length && valuesService.color.length) {
    return true;
  } else {
    return router.createUrlTree(['/Step-1']);
  }
};
