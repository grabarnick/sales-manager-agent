return Credentials.get('amocrm_oauth').then(function(auth) {
  const baseUrl = `https://${auth.name}.amocrm.ru/api/v4`;
  return Http.post({
    url: `${baseUrl}/leads`,
    body: [{ name: name, price: price || 0 }],
    headers: { Authorization: `Bearer ${auth.token}` }
  }).then(res => JSON.parse(res.body)._embedded?.leads[0] || null);
});
