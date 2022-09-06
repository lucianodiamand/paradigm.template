import { Injectable, DependencyLifeTime, DependencyContainer } from "@miracledevs/paradigm-web-di";
import { IFilter, HttpContext } from "@miracledevs/paradigm-express-webapi";
import { MiStatus } from "../status/mistatus";

/**
 * Requires a mysql connection from the connection pool for the ongoing request.
 */
@Injectable({ lifeTime: DependencyLifeTime.Scoped })
export class AuthFilter implements IFilter {

    constructor(private status: MiStatus) {}

    async beforeExecute(httpContext: HttpContext): Promise<void> {
        try {
            const token = httpContext.request.headers['x-auth'];
            if (token !== 'AAA123') {
              httpContext.response.sendStatus(401);
            }
        } catch {
            httpContext.response.sendStatus(500);
        }
    }

}
