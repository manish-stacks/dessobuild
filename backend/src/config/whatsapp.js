const axios = require('axios');
const config = require('dotenv');
config.config();

const SendWhatsapp = async (number, message) => {
    const apiKey = process.env.WHATSAPP_API_KEY || "9c9673c00d8649c380acc43fd55eb743";
    const baseUrl = process.env.WHATSAPP_BASE_URL || "https://api.iconicsolution.co.in/wapp/v2/api/send";

    const params = new URLSearchParams({
        apikey: apiKey,
        mobile: number,
        msg: message
    });

    try {
        const response = await axios.get(`${baseUrl}?${params.toString()}`);
        
        return response.data;
    } catch (error) {
        return {
            success: false,
            message: "Internal server error",
            error: error.message
        };
    }
};

module.exports = SendWhatsapp;
