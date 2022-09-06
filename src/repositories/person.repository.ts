import { DependencyContainer, DependencyLifeTime, Injectable } from "@miracledevs/paradigm-web-di";
import { MySqlConnection } from "../core/mysql/mysql.connection";
import { EditRepositoryBase } from "../core/repositories/edit.repository";
import { Person } from "../models/person";

@Injectable({ lifeTime: DependencyLifeTime.Scoped })
export class PersonRepository extends EditRepositoryBase<Person, number> {

    constructor(dependencyContainer: DependencyContainer, connection: MySqlConnection) {
        super(dependencyContainer, connection, Person, 'persons');        
    }

}
