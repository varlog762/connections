import { ConversationInterface } from './conversation.interface';
import { ModifiedPersonInterface } from './modified-person.interface';
import { ResponseErrorInterface } from './response-error.interface';

export interface PeopleStateInerface {
  isRefreshPeopleInProgress: boolean;
  peopleList: ModifiedPersonInterface[];
  errors: ResponseErrorInterface | null;
  peopleTimerValue: number | null;
}
