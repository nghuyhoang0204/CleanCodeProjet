// application/usecases/PlanifierEntretien.ts
import { Entretien } from '../../domain/entities/Entretien';

export class PlanifierEntretien {
    constructor(private entretienRepository: EntretienRepository) { }

    execute(entretien: Entretien) {
        // Logic to plan maintenance
        this.entretienRepository.save(entretien);
    }
}

// application/usecases/EnvoyerRappelsEntretien.ts
export class EnvoyerRappelsEntretien {
    constructor(private entretienRepository: EntretienRepository) { }

    execute() {
        // Logic to send maintenance reminders
        const entretiens = this.entretienRepository.findDueEntretien();
        entretiens.forEach(entretien => {
            // Send reminder
        });
    }
}