import {createServer} from 'node:http';
import {readFile,stat} from 'node:fs/promises';
import {resolve,extname,sep} from 'node:path';
const root=resolve('out');
const types={'.html':'text/html; charset=utf-8','.css':'text/css','.js':'text/javascript','.svg':'image/svg+xml','.png':'image/png','.webp':'image/webp','.woff2':'font/woff2','.json':'application/json','.xml':'application/xml','.txt':'text/plain'};
createServer(async(req,res)=>{try{const pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);let file=resolve(root,'.'+pathname);if(file!==root&&!file.startsWith(root+sep)){res.writeHead(403).end();return;}if((await stat(file)).isDirectory())file=resolve(file,'index.html');res.setHeader('Content-Type',types[extname(file)]||'application/octet-stream');res.end(await readFile(file));}catch{res.writeHead(404,{'Content-Type':'text/html'});res.end(await readFile(resolve(root,'404.html')));}}).listen(3000,'127.0.0.1',()=>console.log('SafeSight preview: http://127.0.0.1:3000'));
