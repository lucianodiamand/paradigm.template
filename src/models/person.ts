import { DependencyLifeTime, Injectable } from "@miracledevs/paradigm-web-di";
import { IPerson } from "./person.interface";

@Injectable({ lifeTime: DependencyLifeTime.Transient })
export class Person implements IPerson {
    id: number = 0;
    name: string = '';
    age: number = 0;
}
