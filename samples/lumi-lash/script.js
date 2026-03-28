const testimonials = [
  { text: '“Best lash retention I’ve had in Miami. The studio is spotless and my brows finally look symmetrical.”', name: '— Ashley R.' },
  { text: '“I get compliments on my brows every week. The shape is super flattering and natural.”', name: '— Camila M.' },
  { text: '“Easy booking, great communication, and gorgeous results. This is my go-to now.”', name: '— Danielle P.' },
  { text: '“She really listens and customizes everything to your face. 10/10 experience.”', name: '— Kiara J.' }
];
let i = 0;
const quoteText = document.getElementById('quoteText');
const quoteName = document.getElementById('quoteName');
function render(){ quoteText.textContent = testimonials[i].text; quoteName.textContent = testimonials[i].name; }
document.getElementById('prev').addEventListener('click', ()=>{ i = (i - 1 + testimonials.length) % testimonials.length; render(); });
document.getElementById('next').addEventListener('click', ()=>{ i = (i + 1) % testimonials.length; render(); });
