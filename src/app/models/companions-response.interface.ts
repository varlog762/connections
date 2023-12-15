import { CompanionItemResponse } from './companion-item-response.interface';

export interface CompanionsResponse {
  Count: 'number';
  Items: CompanionItemResponse[];
}
