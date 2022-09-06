import { Action, ApiController, Controller } from "@miracledevs/paradigm-express-webapi";
import { AuthFilter } from "../filters/auth.filter";
import { MiStatus } from "../status/mistatus";

@Controller({ route: "/api/echo", filters: [AuthFilter] })
export class EchoController extends ApiController {

    constructor(private status: MiStatus) {
        super();
    }

    @Action({ route: "/", filters: [] })
    async get(): Promise<void> {
        try {
            this.httpContext.response.send(this.status.algo());
            this.httpContext.response.status(200);
            return;
        } catch {
            this.httpContext.response.sendStatus(500);
            return;
        }
    }

    @Action({ route: "/" })
    async post(): Promise<void> {
        try {
            this.httpContext.response.send(this.httpContext.request.body);
            this.httpContext.response.status(200);
            return;
        } catch {
            this.httpContext.response.status(500);
            return;
        }
    }

}
