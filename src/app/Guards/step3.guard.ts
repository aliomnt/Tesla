import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ValuesService } from '../Services/values.service';

export const step3Guard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const valuesService = inject(ValuesService);
  if (valuesService.model.length && valuesService.color.length) {
    if (valuesService.config && valuesService.config.description.length) {
      return true;
    } else {
      return router.createUrlTree(['/Step-2']);
    }
  } else {
    return router.createUrlTree(['/Step-1']);
  }
};
