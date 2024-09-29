// app/api/clothes/route.js
import { NextResponse } from 'next/server';
import db from '@utils/database.js';

export async function GET() {
    try {
        // Use a Promise to wrap the db.query
        const results = await new Promise((resolve, reject) => {
            db.query('SELECT * FROM clothes', (error, results) => {
                if (error) {
                    reject(error); // Reject the promise with the error
                } else {
                    resolve(results); // Resolve the promise with the results
                }
            });
        });

        // Return the results as a JSON response
        return NextResponse.json(results);
    } catch (error) {
        console.error('Error fetching clothes:', error);
        return NextResponse.json({ error: 'Failed to fetch clothes' }, { status: 500 });
    }
}