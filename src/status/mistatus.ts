import { DependencyLifeTime, Injectable } from "@miracledevs/paradigm-web-di";

@Injectable({ lifeTime: DependencyLifeTime.Scoped })
export class MiStatus {

    id: number = 0;

    algo(): string {
        return `Hola desde mi status ${this.id++}`;
    }

}
