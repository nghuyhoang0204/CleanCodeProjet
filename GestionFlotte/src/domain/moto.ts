// domain/entities/Moto.ts
export class Moto {
    constructor(
        public id: string,
        public model: string,
        public mileage: number,
        public lastServiceDate: Date
    ) { }
}

// domain/entities/Entretien.ts
export class Entretien {
    constructor(
        public id: string,
        public motoId: string,
        public date: Date,
        public mileage: number,
        public details: string
    ) { }
}

// domain/entities/PieceDetachee.ts
export class PieceDetachee {
    constructor(
        public id: string,
        public name: string,
        public stock: number,
        public threshold: number
    ) { }
}

// domain/entities/Conducteur.ts
export class Conducteur {
    constructor(
        public id: string,
        public name: string,
        public licenseNumber: string,
        public experience: number
    ) { }
}

// domain/entities/Incident.ts
export class Incident {
    constructor(
        public id: string,
        public conducteurId: string,
        public motoId: string,
        public date: Date,
        public description: string
    ) { }
}