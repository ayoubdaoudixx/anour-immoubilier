import { GoogleGenAI } from "@google/genai";
import { MOCK_PROPERTIES } from '../constants';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const sendChatMessage = async (message: string, history: {role: 'user'|'model', text: string}[]) => {
  try {
    // Construct context from mock properties to make the AI aware of the inventory
    const propertyContext = MOCK_PROPERTIES.map(p => 
      `- ${p.type} à ${p.location}: ${p.title}, ${p.price} DH/mois, ${p.rooms} pièces.`
    ).join('\n');

    const systemInstruction = `
      Tu es l'assistant virtuel intelligent du site web "Anouar Immobilier".
      Ton rôle est d'aider les clients à trouver une location au Maroc ou de répondre à leurs questions sur l'agence.
      L'agence appartient à M. Anouar (des Émirats).
      
      Voici la liste des biens actuellement disponibles sur le site :
      ${propertyContext}

      Règles :
      1. Réponds toujours en français.
      2. Sois poli, professionnel et chaleureux (luxe).
      3. Si un utilisateur cherche quelque chose de spécifique, suggère les biens de la liste ci-dessus.
      4. Si le bien n'existe pas, propose de nous contacter via le formulaire ou WhatsApp.
      5. Tes réponses doivent être concises.
    `;

    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: systemInstruction,
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessage({ message });
    return result.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Désolé, je rencontre un problème technique pour le moment. Veuillez réessayer plus tard.";
  }
};
