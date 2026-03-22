const express = require('express');
const app = express();

app.use(express.json());

app.post('/api/mtn/callback', (req, res) => {
  console.log('📞 Callback MTN reçu !');
  console.log('Données:', req.body);
  
  const { referenceId, status, amount } = req.body;
  
  if (status === 'SUCCESSFUL') {
    console.log(`✅ Paiement de ${amount} FCFA confirmé !`);
  }
  
  res.json({ status: 'OK', message: 'Callback reçu' });
});

app.get('/', (req, res) => {
  res.json({ status: 'en ligne', message: 'Serveur callback MTN' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur le port ${PORT}`);
});
