import { Action, ApiController, Controller } from "@miracledevs/paradigm-express-webapi";
import { Person } from "../models/person";
import { PersonRepository } from "../repositories/person.repository";

@Controller({ route: "/api/persons" })
export class PersonController extends ApiController {

    constructor(private repo: PersonRepository) {
        super();
    }

    @Action({ route: "/" })
    async get(): Promise<void> {
        try {
            const persons = await this.repo.getAll();
            this.httpContext.response.send(persons);
            this.httpContext.response.status(200);
            return;
        } catch {
            this.httpContext.response.sendStatus(500);
            return;
        }
    }

    @Action({ route: "/", fromBody: true })
    async post(person: Person): Promise<void> {
        try {
            const idResult = await this.repo.insertOne(person);
            this.httpContext.response.send(idResult);
            this.httpContext.response.status(200);
            return;
        } catch {
            this.httpContext.response.status(500);
            return;
        }
    }

    @Action({ route: "/:id" })
    async delete(id: number): Promise<void> {
        try {
            await this.repo.delete(id);
            this.httpContext.response.sendStatus(200);
            return;
        } catch {
            this.httpContext.response.sendStatus(500);
            return;
        }
    }

}
