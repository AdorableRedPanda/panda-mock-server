import { initializeSettingsServer } from './src/initializeSettingsServer';
import { initializeMockServer } from './src/initializeMockServer';
import { RequestsMocker } from './src/RequestsMocker';

const mocker = new RequestsMocker();

const loggReq = initializeSettingsServer(mocker);

initializeMockServer(loggReq, mocker.getResponse);
