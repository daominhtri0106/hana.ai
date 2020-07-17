import { Injectable } from '@angular/core';
import { HttpClient, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApplicationsService implements HttpInterceptor {

  constructor(private http: HttpClient) {

  }

  sufix = 'https://0a105a29-5fce-47f7-ba50-6c91e6251d00.mock.pstmn.io/';

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status !== 401) {

        }
        return throwError(error);
      })
    );
  }

  getApps() {
    return this.http.get(this.sufix + 'list/apps');
  }

  getCategory() {
    return this.http.get(this.sufix + 'list/category');
  }
}
