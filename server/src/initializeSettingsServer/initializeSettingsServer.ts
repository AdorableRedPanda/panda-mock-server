import {LoggerCb, RequestsHandler} from "../../types";
import {serveStaticData} from "./serveStaticData";

const settingsPort = process.env.APP_SETTINGS_PORT || '9161';

export const initializeSettingsServer = (mocker: RequestsHandler): LoggerCb => {
    serveStaticData(settingsPort);

    return console.log;
}