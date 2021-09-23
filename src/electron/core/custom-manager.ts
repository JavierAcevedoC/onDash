import Executor from './executor';
import CommandsLine from './commands-line';

class CustomManager {
    public static BASE = ''; //Contains space for make clean the query
    private executor: Executor;

    constructor() {
        this.executor = new Executor();
    }

    private async baseMethod(asQuery: string): Promise<Array<string>> {
        return new Promise((resolve, reject) => {

            this.executor.execute(CustomManager.BASE + asQuery, (buffer: any) => {
                if (!!buffer) {
                    resolve(String(buffer).split('\n').filter(b => b !== ''));
                } else {
                    reject(new Error('Not yet proccess'));
                }
            });

        });
    }

    // JUST READ BUFFERS
    public async customCommand(): Promise<Array<string>> {
          return this.baseMethod(CommandsLine.LS);
    }
}

export default CustomManager
