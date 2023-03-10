import { Inject, ServantUtil, Service, TarsusCache } from "tarsus";

@Service
class GateWayService{
    
    // constructor() {
    //     this.TarsusCache.RedisTemplate.sRem("TarsusDemoProject",
    //         "@TarsusDemoProject/NodeProxyDemo -l node -t @tarsus/http -h 127.0.0.1 -p 7099");
    //     this.TarsusCache.RedisTemplate.sRem(
    //       "TarsusDemoProject",
    //       "@TarsusDemoProject/NodeProxyDemo -l java -t @tarsus/http -h 127.0.0.1 -p 7098"
    //     );
    // }

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