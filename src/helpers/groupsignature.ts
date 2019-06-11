

import {Client} from './../client'



export class GroupSignatureAPI {

    constructor(readonly client: Client) {}

    /**
     * Convenience for calling `database_api`.
     */
    public call(method: string, params?: {}) {
        return this.client.call('group_signature_api.',method, params)
    }

    /**
     * Return state of server.
     */
    public extract(userID: string): Promise<any> {
        return this.call('extract',{"userID":userID})
    }
    public getVk():Promise<any> {
        return this.call('get_vk',{});
    }
    public getOk(e1:string,e2: string):Promise<any> {
        return this.call('get_ok',{"e1":e1,"e2":e2})
    }
}
