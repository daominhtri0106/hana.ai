import { ApplicationModel } from 'src/app/models/application.model';

export interface ApplicationState {
    applications: ApplicationModel[];
    status: boolean;
}
