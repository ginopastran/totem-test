require('dotenv').config();
const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');

async function sendTemplateMessage() {
  const res = await axios({
    url: 'https://graph.facebook.com/v21.0/521672377685359/messages',
    method: 'post',
    headers: {
      Authorization: `Bearer ${process.env.WHATSAPP_TOKEN}`,
      'Content-Type': 'application/json',
    },
    data: JSON.stringify({
      messaging_product: 'whatsapp',
      to: '542613602762',
      type: 'template',
      template: {
        name: 'hello_world',
        language: {
          code: 'en_US',
        },
      },
    }),
  });
  console.log(res.data);
}

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
      to: '542613602762',
      type: 'text',
      text: {
        body: 'Hola perro',
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
      to: '542613602762',
      type: 'image',
      image: {
        // link: 'https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png',
        id: '1825892411551222',
        caption: 'Cualquier cosa',
      },
    }),
  });
  console.log(res.data);
}

async function sendUploadMedia() {
  const data = new FormData();
  data.append('messaging_product', 'whatsapp');
  data.append('file', fs.createReadStream(process.cwd() + '/logo.png'), {
    contentType: 'image/png',
  });
  data.append('type', 'image/png');

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
sendMediaMessage();
// sendUploadMedia();
