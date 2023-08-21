import {Observable} from 'rxjs';
import {ajax} from 'rxjs/ajax';
import {HttpClient} from './httpClient';

export class ObservableAjaxHttpClient implements HttpClient {
  post<T>(
    url: string,
    body?: Record<string, string>,
    headers?: Record<string, string>,
  ): Observable<R> {
    return ajax.post<T>(url, body, headers);
  }

  get<R>(url: string, headers?: Record<string, string>): Observable<R> {
    return ajax.getJSON<R>(url, headers);
  }

  put<T>(
    url : string,
    body?: Record<string,string>,
    headers?: Record<string,string> 
  ): Observable<R>{
    return ajax.put<T>(url, body, headers)
  }
}
