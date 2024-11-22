require('dotenv').config();
const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');

// const phoneNumber = '542613602762'; //Moka
const phoneNumber = '542604022036'; //Andy

async function sendTextMessage() {
  const res = await axios({
    url: 'https://graph.facebook.com/v21.0/521672377685359/messages',
    method: 'post',
    headers: {
      Authorization: `Bearer ${process.env.WHATSAPP_TOKEN}`,
      'Content-Type': 'application/json',
    },
    data: JSON.stringify({
      messaging_product: 'whatsapp',
      to: phoneNumber,
      type: 'text',
      text: {
        body: `En Andex te avisamos cuando tu pedido esté listo, mientras revisá algunas características de nuestro totem.

Contactanos en:
🌐 www.andex.tech
📲 +5492604017239`,
      },
    }),
  });
  console.log(res.data);
}

async function sendMediaMessage() {
  const res = await axios({
    url: 'https://graph.facebook.com/v21.0/521672377685359/messages',
    method: 'post',
    headers: {
      Authorization: `Bearer ${process.env.WHATSAPP_TOKEN}`,
      'Content-Type': 'application/json',
    },
    data: JSON.stringify({
      messaging_product: 'whatsapp',
      to: phoneNumber,
      type: 'document',
      document: {
        // link: 'https://i.postimg.cc/13grmqx8/logo.png',
        id: '1086105422719443',
        caption: `En Andex Tech te avisamos cuando tu pedido esté listo, mientras revisá algunas características de nuestro totem.

Contactanos en:
🌐 www.andex.tech
📲 +5492604017239
        `,
        filename: 'andextech.pdf',
      },
    }),
  });
  console.log(res.data);
}

async function sendUploadMedia() {
  const data = new FormData();
  data.append('messaging_product', 'whatsapp');
  data.append('file', fs.createReadStream(process.cwd() + '/brochure.pdf'));
  data.append('type', 'application/pdf');

  const res = await axios({
    url: 'https://graph.facebook.com/v21.0/521672377685359/media',
    method: 'post',
    headers: {
      Authorization: `Bearer ${process.env.WHATSAPP_TOKEN}`,
    },
    data,
  });
  console.log(res.data);
}

// sendTextMessage();
// sendTextMessage();
sendMediaMessage();
// sendUploadMedia();
