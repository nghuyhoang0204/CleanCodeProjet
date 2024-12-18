// infrastructure/repositories/InMemoryEntretienRepository.ts
import { Entretien } from '../../domain/entities/Entretien';

export class InMemoryEntretienRepository {
    private entretiens: Entretien[] = [];

    save(entretien: Entretien) {
        this.entretiens.push(entretien);
    }

    findDueEntretien(): Entretien[] {
        // Logic to find due maintenance
        return this.entretiens.filter(entretien => {
            // Check if maintenance is due
        });
    }
}