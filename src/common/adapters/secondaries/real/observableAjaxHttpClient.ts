import {Observable} from 'rxjs';
import {ajax} from 'rxjs/ajax';
import {HttpClient} from './httpClient';

export class ObservableAjaxHttpClient implements HttpClient {
  get<R>(url: string, headers?: Record<string, string>): Observable<R> {
    return ajax.getJSON<R>(url, headers);
  }

  post<T>(
    url: string,
    body?: Record<string, string>,
    headers?: Record<string, string>,
  ): Observable<R> {
    return ajax.post<T>(url, body, headers);
  }
}
