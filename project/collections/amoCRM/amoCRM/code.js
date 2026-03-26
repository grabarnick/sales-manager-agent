return Credentials.get('amocrm_oauth').then(function(auth) {
  const baseUrl = `https://${auth.name}.amocrm.ru/api/v4`;

  if (action === 'searchContact') {
    return Http.get({
      url: `${baseUrl}/contacts`,
      params: { query },
      headers: { Authorization: `Bearer ${auth.token}` }
    }).then(res => JSON.parse(res.body)._embedded?.contacts || []);
  }

  if (action === 'createLead') {
    return Http.post({
      url: `${baseUrl}/leads`,
      body: [leadData],
      headers: { Authorization: `Bearer ${auth.token}` }
    }).then(res => JSON.parse(res.body)._embedded?.leads[0] || null);
  }

  return { error: 'Unknown action' };
});
