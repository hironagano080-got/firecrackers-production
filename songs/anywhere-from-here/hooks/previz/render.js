const {chromium}=require('playwright');const fs=require('fs');const path=require('path');
(async()=>{const dir=path.resolve(process.argv[2]||'frames');fs.mkdirSync(dir,{recursive:true});
const T0=+process.argv[3]||129.5,T1=+process.argv[4]||161.15,step=+process.argv[5]||1/30;
const b=await chromium.launch({args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader']});
const pg=await b.newPage({viewport:{width:720,height:1280}});
pg.on('console',m=>{if(m.type()==='error')console.log('ERR',m.text())});pg.on('pageerror',e=>console.log('PAGEERR',e.message));
await pg.route(/three\.min\.js/,r=>r.fulfill({path:'package/build/three.min.js',contentType:'text/javascript'}));
await pg.route(/Reflector\.js/,r=>r.fulfill({path:'package/examples/js/objects/Reflector.js',contentType:'text/javascript'}));
await pg.route(/fonts\.(googleapis|gstatic)/,r=>r.abort());
await pg.goto('file://'+path.resolve(process.env.PAGE||'hook.html')+'?export');await pg.waitForFunction(()=>window.__seek);
let i=0;for(let t=T0;t<T1;t+=step){const d=await pg.evaluate(t=>{__seek(t);return document.getElementById('cv').toDataURL('image/jpeg',.92)},t);
fs.writeFileSync(path.join(dir,String(i++).padStart(5,'0')+'.jpg'),Buffer.from(d.split(',')[1],'base64'))}
console.log('frames',i);await b.close()})();
