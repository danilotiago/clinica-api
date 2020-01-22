import { statesService } from './states.service';
import * as restify from 'restify' 
import { IRouter } from './../../routes/irouter';

class StatesRoute implements IRouter {

    path: string = '/states'
    
    applyRoutes(application: restify.Server): void {
        application.get(this.path, statesService.findAll)
    }
}

export const statesRoute: StatesRoute = new StatesRoute()