// app/api/submit-order/route.js
import { NextResponse } from 'next/server';
import db from '@utils/database.js';

export async function POST(req, res) {
    if (req.method === "POST")
    {
        const {
            email,
            firstName,
            lastName,
            country,
            address1,
            address2,
            state,
            zip,
            name,
            cardNumber,
            expiry,
            cvv,
            totalAmount, // Assume this is passed in from the frontend as fullPrice
            cartItems // Assume this contains items for the order
        } = await req.json();

        console.log("Email in route.js: ", email)
       
        

        try {
            const userQuery = 'SELECT user_id FROM users WHERE email = ?';
            const [existingUser] = await db.promise().query(userQuery, [email]);
            let userId; 
            if (existingUser.length > 0)
            {
                userId = existingUser[0].user_id
            }
            else{
                const insertUserQuery = `
                INSERT INTO users (email, first_name, last_name, country, address1, address2, state, zip) 
                VALUES (?, ?, ?, ?, ?, ?, ?, ?)`; 
                const [userResult] = await db.promise().query(insertUserQuery, [email, firstName, lastName, country, address1, address2, state, zip])
                
                userId = userResult.insertId
                console.log(userId)
            }

            const orderQuery = `INSERT INTO orders (user_id, cardholder_name, card_number, expiry_date, cvv, total_amount)
                               VALUES (?, ?, ?, ?, ?, ?)`
            const [orderResult] = await db.promise().query(orderQuery, [userId, name, cardNumber, expiry, cvv, totalAmount])

            const orderId = orderResult.insertId;
            const orderItemsQuery = `INSERT INTO order_items (order_id, item_id, quantity, size, price)
                                    VALUES (?, ?, ?, ?, ?)`
            const cartItemInsertions = cartItems.map(async item =>{
                const {item_id, count, itemSize, price} = item
                await db.promise().query(orderItemsQuery, [orderId, item_id, count, itemSize, price]);
            })
            await Promise.all(cartItemInsertions);
            console.log('User entered everything successfully!')
            return NextResponse.json(res);
        } catch (error) {
            console.error('Error processing order:', error);
            return NextResponse.json(res);
        }
    }
    else{
        console.error('Error inserting order items:', error);
    }
}