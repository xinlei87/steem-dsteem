

import {Client} from './../client'



export class DEMOAPI {

    constructor(readonly client: Client) {}

    /**
     * Convenience for calling `database_api`.
     */
    public call(method: string, params?: {}) {
        return this.client.call('demo_api.',method, params)
    }

    /**
     * Return state of server.
     */
    public getSum(num: number[]): Promise<any> {
        return this.call('get_sum',{"nums":num})
    }

}
