
const menuToggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.navlinks');
if(menuToggle&&nav){menuToggle.addEventListener('click',()=>nav.classList.toggle('open'));nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')))}
document.querySelectorAll('.faq-q').forEach(btn=>btn.addEventListener('click',()=>btn.closest('.faq-item').classList.toggle('open')));
const cookie=document.querySelector('.cookie');
if(cookie&&!localStorage.getItem('stmConsent')) cookie.classList.add('show');
document.querySelectorAll('[data-consent]').forEach(btn=>btn.addEventListener('click',()=>{localStorage.setItem('stmConsent',btn.dataset.consent);cookie?.classList.remove('show')}));
const pubSearch=document.querySelector('#pubSearch');
if(pubSearch){pubSearch.addEventListener('input',()=>{const q=pubSearch.value.toLowerCase().trim();document.querySelectorAll('.pub-item').forEach(el=>{el.style.display=!q||el.innerText.toLowerCase().includes(q)?'block':'none'})})}
