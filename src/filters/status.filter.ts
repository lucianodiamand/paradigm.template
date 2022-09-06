import { Injectable, DependencyLifeTime, DependencyContainer } from "@miracledevs/paradigm-web-di";
import { IFilter, HttpContext } from "@miracledevs/paradigm-express-webapi";
import { MiStatus } from "../status/mistatus";

/**
 * Requires a mysql connection from the connection pool for the ongoing request.
 */
@Injectable({ lifeTime: DependencyLifeTime.Scoped })
export class StatusFilter implements IFilter {

    constructor(private status: MiStatus) {}

    async beforeExecute(httpContext: HttpContext): Promise<void> {
        try {
            this.status.algo();
        } catch {
            httpContext.response.sendStatus(500);
        }
    }

}
