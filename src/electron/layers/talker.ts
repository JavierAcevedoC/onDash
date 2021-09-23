import { BrowserWindow, ipcMain, IpcMainEvent } from 'electron';
import { Observable, Subject } from 'rxjs';
import { IEventsNames, IReturnEventNames } from '../../shared/types/event-types';


class Talker {

    public static readonly allEventNames: Array<IEventsNames> = ['get-sensor-x', 'get-sensor-y', 'get-sensor-z'];

    // This maybe can be replaced by a factory
    private EventXListenerSubject: Subject<Array<string>> = new Subject();
    private EventYListenerSubject: Subject<Array<string>> = new Subject();

    constructor(win: BrowserWindow) {
        this.listnersEventsName(win);
    }

    private listnersEventsName(win: BrowserWindow): void {
        Talker.allEventNames.forEach(name =>
            this.listenEvent(name).subscribe(
                buffer => {
                    win.webContents.send(this.onEventName(name), buffer);
                }
            )
        );
    }

    private listenEvent(eventName: IEventsNames): Observable<Array<string>> {

        ipcMain.on(eventName, (event: IpcMainEvent, arg: string | []) => {

            switch (eventName) {
                case 'get-sensor-x': {
                    // My lovecraft eventx
                }
                case 'get-sensor-y': {
                    // My lovecraft eventy
                }
            }
        });

        return this.onListenEvent(eventName); 
    }

    private onListenEvent(name: IEventsNames): Observable<Array<string>> {
        //'Henllo hoom@n!'
        return new Subject();
    }

    private onEventName(eventName: IEventsNames): IReturnEventNames {
        switch (eventName) {
            case 'get-sensor-x': {
                return 'return-eventNameX';
            }

            default:
                return '';
        }
    }
}
export default Talker;
