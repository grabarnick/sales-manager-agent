return Credentials.get('amocrm_oauth').then(function(auth) {
  const baseUrl = `https://${auth.name}.amocrm.ru/api/v4`;
  return Http.get({
    url: `${baseUrl}/contacts`,
    params: { query: query },
    headers: { Authorization: `Bearer ${auth.token}` }
  }).then(res => JSON.parse(res.body)._embedded?.contacts || []);
});
