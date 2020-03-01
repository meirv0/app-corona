import ReportModel, { IReports } from './reports.model';

export async function getNearReports({ latitude, longitude, maxDistance, startDate, endDate }) {

    const query: any = {
        location: {
            $nearSphere: {
                $geometry: {
                    type: 'Point',
                    coordinates: [Number(latitude), Number(longitude)],
                },
                $maxDistance: Number(maxDistance)
            }
        }
    }

    if (startDate) {
        query.startDate = {
            $gte: new Date(startDate)
        }
    }

    if (endDate) {
        query.endDate = {
            $lte: new Date(endDate)
        }
    }

    const docs = await ReportModel
        .find(query)
        .lean()
        .exec();

    return docs;
}


// ReportModel.insertMany([
//     {
//         location: {
//             type: 'Point',
//             coordinates: [32.022790, 34.861805]
//         },
//         startDate: new Date('2020-02-23T18:00:00.000+0200'),
//         endDate: new Date('2020-02-23T22:00:00.000+0200'),
//         description: 'הפיראט האדום'
//     },
//     {
//         location: {
//             type: 'Point',
//             coordinates: [32.022790, 34.861805]
//         },
//         startDate: new Date('2020-02-24T08:30:00.000+0200'),
//         endDate: new Date('2020-02-24T24:00:00.000+0200'),
//         description: 'הפיראט האדום'
//     },
//     {
//         location: {
//             type: 'Point',
//             coordinates: [32.022790, 34.861805]
//         },
//         startDate: new Date('2020-02-25T08:30:00.000+0200'),
//         endDate: new Date('2020-02-25T24:00:00.000+0200'),
//         description: 'הפיראט האדום'
//     }
// ]);