return Credentials.get('amocrm_oauth').then(function(auth) {
  const baseUrl = `https://${auth.name}.amocrm.ru/api/v4`;
  return Http.post({
    url: `${baseUrl}/tasks`,
    body: [{
      text: text,
      complete_till: complete_till,
      entity_id: entity_id || 0,
      entity_type: entity_id ? "leads" : "common"
    }],
    headers: { Authorization: `Bearer ${auth.token}` }
  }).then(res => JSON.parse(res.body)._embedded?.tasks[0] || null);
});
