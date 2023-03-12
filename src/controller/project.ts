import { Controller, Get, Inject } from "tarsus";
import { ProjectService } from "../service/project";
import { ret } from "../utils/ret";

@Controller("/project")
class ProjectController {
  @Inject(ProjectService)
  ProjectService: ProjectService;

  /**
   * @description 根据 微服务分组 group
   *  和 微服务名serverName 删除
   */
  @Get("/del")
  public async delAny(request) {
    const { group, serverName } = request.query;
    const data = await this.ProjectService.del(group, serverName);
    return ret.success(data);
  }

  /**
   * @description 根据 微服务分组 group
   *  和 微服务名serverName 添加
   */
  @Get("/add")
  public async addAny(request) {
    const { group, serverName } = request.query;
    const data = await this.ProjectService.add(group, serverName);
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
