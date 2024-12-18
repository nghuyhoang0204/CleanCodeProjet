// interface/api/EntretienController.ts
import { PlanifierEntretien } from '../../application/usecases/PlanifierEntretien';
import { Request, Response } from 'express';

export class EntretienController {
    constructor(private planifierEntretien: PlanifierEntretien) { }

    planifier(req: Request, res: Response) {
        const entretien = req.body;
        this.planifierEntretien.execute(entretien);
        res.status(201).send();
    }
}