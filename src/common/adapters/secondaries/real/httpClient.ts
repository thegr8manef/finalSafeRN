import {Observable} from 'rxjs';

export interface HttpClient {
  get<R>(url: string, headers?: object): Observable<R>;
  post<R>(url: string, headers?: object, body?: object): Observable<R>;
  put<R>(url: string, headers?: object, body?: object): Observable<R>;
}
