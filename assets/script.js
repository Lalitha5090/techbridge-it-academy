
const m=document.querySelector('.menu');const l=document.querySelector('.links');if(m&&l)m.addEventListener('click',()=>l.classList.toggle('open'));
document.querySelectorAll('form[data-wa]').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault();if(!f.reportValidity())return;const d=new FormData(f);let s='Hello TechBridge Academy, I would like to enquire:\\n';for(const [k,v] of d.entries())if(String(v).trim())s+=k+': '+v+'\\n';window.open('https://wa.me/918179370733?text='+encodeURIComponent(s),'_blank','noopener');const msg=f.querySelector('.status');if(msg)msg.textContent='WhatsApp opened with your enquiry. Please press Send in WhatsApp.';}));
document.querySelectorAll('[data-year]').forEach(e=>e.textContent=new Date().getFullYear());
