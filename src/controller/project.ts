import { Controller, Get, Inject } from "tarsus";
import { ProjectService } from "../service/project";
import { ret } from "../utils/ret";

@Controller("/project")
class ProjectController {
  @Inject(ProjectService)
  ProjectService: ProjectService;

  @Get("/del")
  public async delAny(request) {
    const { group, serverName } = request.query;
    const data = await this.ProjectService.del(group, serverName);
    return ret.success(data);
  }

  @Get("/members")
  public async getMembers(request) {
    const { group } = request.query;
    const data = await this.ProjectService.getMembers(group);
    return ret.success(data);
  }
}

export { ProjectController };
