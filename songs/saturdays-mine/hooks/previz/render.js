const {chromium}=require('playwright');const fs=require('fs');const path=require('path');
(async()=>{const dir=path.resolve(process.argv[2]);fs.mkdirSync(dir,{recursive:true});
const ts=process.argv[3].split(',').map(Number);const step=+process.argv[4]||0;
const b=await chromium.launch({args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader']});
const pg=await b.newPage({viewport:{width:720,height:1280}});
pg.on('pageerror',e=>console.log('PAGEERR',e.message));pg.on('console',m=>{if(m.type()==='error')console.log('ERR',m.text())});
await pg.goto('file://'+path.resolve('cut05.html'));await pg.waitForFunction(()=>window.__seek);
let list=ts; if(step){list=[];for(let t=ts[0];t<ts[1]-1e-9;t+=step)list.push(t)}
let i=0;for(const t of list){const d=await pg.evaluate(t=>{__seek(t);return document.getElementById('cv').toDataURL('image/jpeg',.9)},t);
fs.writeFileSync(path.join(dir,String(i++).padStart(5,'0')+'.jpg'),Buffer.from(d.split(',')[1],'base64'))}
console.log('frames',i);await b.close()})();
