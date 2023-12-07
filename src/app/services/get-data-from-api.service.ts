import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { PageDataFromApiInterface } from '../../redux/models/page-data-from-api.interface';

@Injectable()
export class GetDataFromApiService {
  constructor(private http: HttpClient) { }

  getPageDataByQuery(query: string, pageToken: string = '', maxResults: number = 20): Observable<PageDataFromApiInterface> {
    const paramsGetMetadataByQuery = new HttpParams()
      .set('type', 'video')
      .set('part', 'snippet')
      .set('maxResults', maxResults)
      .set('pageToken', pageToken)
      .set('q', query);
    return this.http.get('search?', { params: paramsGetMetadataByQuery })
      .pipe(
        map((res) => JSON.parse(JSON.stringify(res))),
      );
  }
}
