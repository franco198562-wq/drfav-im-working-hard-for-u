export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (request.method === 'OPTIONS') return new Response(null, {headers: cors()});
    if (url.pathname === '/api/health') return json({ok:true});
    if (url.pathname === '/api/login' && request.method === 'POST') {
      const body = await request.json();
      const valid = body.code && body.code === env.ADMIN_CODE;
      return json({authenticated: valid}, valid ? 200 : 401);
    }
    return json({error:'Not found'},404);
  }
};
function cors(){return {'Access-Control-Allow-Origin':'*','Access-Control-Allow-Headers':'Content-Type','Access-Control-Allow-Methods':'GET,POST,OPTIONS'}}
function json(data,status=200){return new Response(JSON.stringify(data),{status,headers:{'Content-Type':'application/json',...cors()}})}
