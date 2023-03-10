
import { TarsusGlobalPipe } from "tarsus";

class LogGlobalPipe implements TarsusGlobalPipe{
  next(req, res, next): void {
    console.log(req.query);
    console.log(req.body);
    next()
  }
}

export { LogGlobalPipe };