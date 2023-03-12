import { ServantUtil, Service, TarsusCache } from "tarsus";

@Service
class ProjectService{
    
    TarsusCache:TarsusCache = new TarsusCache()

    async del(group: string, serverName: string) {
        let getAllServer = await this.getMembers(group);
        getAllServer = getAllServer.filter(item=>{
            const toObj = ServantUtil.parse(item)
            if(toObj.serverProject == serverName){
                return true
            }else{
                return false
            }
        })
        getAllServer.forEach(item=>{
            this.TarsusCache.RedisTemplate.sRem(group,item)
        })
        return true
    }
    
    async getMembers(group: String) {
        // @ts-ignore
        let getAllServer = await this.TarsusCache.RedisTemplate.SMEMBERS(group)
        return getAllServer
    }

    async add(group: string, serverName: string) {
        return await this.TarsusCache.RedisTemplate.sAdd(group, serverName);
    }
}

export {
    ProjectService
}