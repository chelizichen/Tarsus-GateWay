import { Controller, Get, Inject } from "tarsus";
import { ProjectService } from "../service/project";
import { ret } from "../utils/ret";

@Controller("/project")
class ProjectController{

    @Inject(ProjectService)
    ProjectService:ProjectService

    @Get("/del")
    public async delAny(request){
        const {group,serverName} = request;
        const data = await this.ProjectService.del(group,serverName);
        return ret.success(data)
    }

    @Get("/members")
    public getMembers()

}

export {
    ProjectController
}