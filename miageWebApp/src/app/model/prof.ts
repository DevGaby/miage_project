// export class Professeur {
//     constructor(
//         id: number, lastname: string, firstname: string,
//         statut: string, description: string ) {}
// }

export class Professeur {
    id: number;
    firstname: string;
    lastname: string;
    statut: string;
    description: string;

    constructor(id: number, firstname: string, lastname: string, statut: string, description: string) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.statut = statut;
        this.description = description;
    }
}

