import { NextResponse } from 'next/server';
import db from '@utils/database.js';

export async function GET(request, { params }) {
    const { category } = params; // Get the category from the URL

    try {
        // Fetch items based on the category
        const results = await new Promise((resolve, reject) => {
            db.query('SELECT * FROM clothes WHERE category = ?', [category], (error, results) => {
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
        console.error('Error fetching clothes by category:', error);
        return NextResponse.json({ error: 'Failed to fetch clothes' }, { status: 500 });
    }
}