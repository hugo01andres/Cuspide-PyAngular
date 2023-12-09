import { HttpInterceptorFn } from '@angular/common/http';

export const injectInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
