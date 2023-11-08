import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

const EmailSend = async (req, res) => {
    if(req.method === 'POST' ) {
        const { email } = req.body;
    try {
       const EmailSend = await prisma.user.create({
              data: {
                email,
              },
         });
            res.status(200).json({ success: true });
       } catch (error) {
            console.error("Erreur lors de la connexion à la base de données", error.message);
            res.status(500).json({ success: false, message: "Une erreur s'est produite lors de la connexion." });
        }
    } else {
        res.status(400).json({ success: false, message: "Méthode non prise en charge." });
    }
};

// export async function POST(request){


//     const caca = await response.json();
//         const { email } = request.body
//         const user = await prisma.user.create({
//             data: {
//                 email
//             }
//         });
    

//     return NextResponse.json({ message: "Subscribed for Newsletter", user })

// }
