import { ModifiedCompanionInterface } from './modified-companion.interface';
import { ModifiedPersonInterface } from './modified-person.interface';
import { ResponseErrorInterface } from './response-error.interface';

export interface PeopleStateInerface {
  isRefreshPeopleInProgress: boolean;
  peopleList: ModifiedPersonInterface[];
  wasAttemptToLoadCompanions: boolean;
  companionsList: ModifiedCompanionInterface[];
  errors: ResponseErrorInterface | null;
  peopleTimerValue: number | null;
}
