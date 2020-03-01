import { Router, Request, Response, NextFunction } from 'express';
import { getNearReports } from './reports.controller';


async function onGetReports(req: Request, res: Response, next: NextFunction) {

    try {

        const {
            latitude,
            longitude,
            maxDistance,
            startDate,
            endDate
        } = req.query;

        const reports = await getNearReports({ latitude, longitude, maxDistance, startDate, endDate });
        res.json({ succeeded: true, payload: reports })

    } catch (err) {
        next(err)
    }
}

export default Router()
    .get('/', onGetReports)