import { Inject, ServantUtil, Service, TarsusCache } from "tarsus";

@Service
class GateWayService{
    TarsusCache:TarsusCache = new TarsusCache();

    async saveServer(serverName:string){
        const obj = ServantUtil.parse(serverName)
        const data = await this.TarsusCache.RedisTemplate.sAdd(obj.serverGroup,serverName)

        const hasMembers = await this.TarsusCache.RedisTemplate.sMembers(obj.serverGroup);
        console.log("hasMembers",hasMembers);

        return data
    }
}

export {
    GateWayService
}