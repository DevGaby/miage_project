import { Unit } from '../model/unit';

export class Cours {
    id: number;
    label: string;
    period: string;
    nbHour: Unit;
    teacher: string;
    detail: string;

    constructor(id: number, label: string, period: string, nbHour: Unit, teacher: string, detail: string){
        this.id = id;
        this.label = label;
        this.period = period;
        this.nbHour = nbHour;
        this.teacher = teacher;
        this.detail = detail;
    }
}
