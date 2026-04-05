// ═══════════════════════════════════════════════════════════════════
// 📝 YAHAN DAILY QUESTIONS CHANGE KARO | EDIT QUESTIONS HERE
// ═══════════════════════════════════════════════════════════════════

// Quiz ki basic settings (optional - aap yeh bhi change kar sakte ho)
const QUIZ_CONFIG = {
  icon: "📐",  // Header icon
  titleHindi: "क्रमचय और संचय",
  titleEnglish: "Permutation & Combination",
  subject: "📚 CUET GAT 2026 · गणित | Mathematics"
};

// Questions yahan likho - jitne chahiye utne add/remove kar sakte ho
const questions = [
  { 
    num: 1, 
    hindi: "5! (5 फैक्टोरियल) का मान क्या है?", 
    english: "What is the value of 5! (5 factorial)?", 
    options: ["A) 60","B) 100","C) 120","D) 150"], 
    answer: 2,  // Index: 0=A, 1=B, 2=C, 3=D
    note: "हल: 5! = 5×4×3×2×1 = 120 | Sol: 5! = 120" 
  },
  
  { 
    num: 2, 
    hindi: "शब्द 'SHARMA' के अक्षरों को कितने तरीकों से व्यवस्थित किया जा सकता है?", 
    english: "In how many ways can the letters of 'SHARMA' be arranged?", 
    options: ["A) 720","B) 360","C) 180","D) 240"], 
    answer: 1, 
    note: "हल: 6!/2! = 360 ('A' दो बार | 'A' repeats twice)" 
  },
  
  { 
    num: 3, 
    hindi: "10 लोग एक-दूसरे से हाथ मिलाते हैं — कुल कितने हाथ मिलाए जाते हैं?", 
    english: "10 people shake hands with each other — how many total handshakes?", 
    options: ["A) 40","B) 45","C) 50","D) 55"], 
    answer: 1, 
    note: "हल: n(n-1)/2 = 10×9/2 = 45 | Formula: n(n-1)/2" 
  },
  
  { 
    num: 4, 
    hindi: "शब्द 'FAVOUR' के अक्षरों को कितने तरीकों से व्यवस्थित किया जा सकता है ताकि सभी स्वर एक साथ आएं?", 
    english: "Arrangements of 'FAVOUR' with all vowels together?", 
    options: ["A) 72","B) 96","C) 144","D) 288"], 
    answer: 2, 
    note: "हल: 4! × 3! = 24×6 = 144 | स्वर: A, O, U | Vowels: A, O, U" 
  },
  
  { 
    num: 5, 
    hindi: "शब्द 'OPERATE' के अक्षरों को कितने तरीकों से व्यवस्थित किया जा सकता है?", 
    english: "In how many ways can letters of 'OPERATE' be arranged?", 
    options: ["A) 1260","B) 2520","C) 5040","D) 720"], 
    answer: 1, 
    note: "हल: 7!/2! = 2520 ('E' दो बार | 'E' repeats)" 
  },
  
  { 
    num: 6, 
    hindi: "7 लोगों में से 3 लोगों की समिति कितने तरीकों से बनाई जा सकती है?", 
    english: "From 7 people, in how many ways can a committee of 3 be formed?", 
    options: ["A) 21","B) 35","C) 42","D) 210"], 
    answer: 1, 
    note: "हल: ⁷C₃ = 7!/(3!×4!) = 35" 
  },
  
  { 
    num: 7, 
    hindi: "6 पुरुषों और 4 महिलाओं में से 3 पुरुष और 2 महिलाओं की समिति कितने तरीकों से बनेगी?", 
    english: "Committee of 3 men & 2 women from 6 men & 4 women?", 
    options: ["A) 60","B) 90","C) 120","D) 150"], 
    answer: 2, 
    note: "हल: ⁶C₃ × ⁴C₂ = 20×6 = 120" 
  },
  
  { 
    num: 8, 
    hindi: "15 बिंदुओं से (कोई तीन संरेखीय नहीं) कितने त्रिभुज बन सकते हैं?", 
    english: "How many triangles can be formed from 15 non-collinear points?", 
    options: ["A) 365","B) 455","C) 545","D) 655"], 
    answer: 1, 
    note: "हल: ¹⁵C₃ = (15×14×13)/(3×2×1) = 455" 
  },
  
  { 
    num: 9, 
    hindi: "अंक 0,1,2,3,4 से (बिना पुनरावृत्ति) कितनी 5-अंकीय संख्याएं बनेंगी?", 
    english: "How many 5-digit numbers from digits 0,1,2,3,4 (no repetition)?", 
    options: ["A) 48","B) 72","C) 96","D) 120"], 
    answer: 2, 
    note: "हल: 4×4×3×2×1 = 96 (0 पहले स्थान पर नहीं | 0 cannot be first)" 
  },
  
  { 
    num: 10, 
    hindi: "यदि ⁿC₂ = 210 है, तो n का मान क्या है?", 
    english: "If ⁿC₂ = 210, what is the value of n?", 
    options: ["A) 18","B) 19","C) 20","D) 21"], 
    answer: 3, 
    note: "हल: n(n-1)/2 = 210 → n(n-1) = 420 → n = 21" 
  },
  
  { 
    num: 11, 
    hindi: "n लोगों को गोल मेज पर कितने तरीकों से बैठाया जा सकता है?", 
    english: "In how many ways can n people be seated around a round table?", 
    options: ["A) n!","B) (n-1)!","C) n!/2","D) (n-1)!/2"], 
    answer: 1, 
    note: "गोल मेज पर एक स्थान fixed माना जाता है | One position fixed in circular arrangement" 
  },
  
  { 
    num: 12, 
    hindi: "दो टीमों में प्रत्येक में 15 खिलाड़ी हैं — एक टीम दूसरी से हाथ मिलाए तो कुल हाथ?", 
    english: "15 players each in 2 teams shake hands with opposite team — total handshakes?", 
    options: ["A) 210","B) 225","C) 435","D) 450"], 
    answer: 1, 
    note: "हल: 15×15 = 225 (दोनों टीमों के बीच | Between both teams)" 
  },
  
  { 
    num: 13, 
    hindi: "शब्द 'DAUGHTER' के अक्षरों को कितने तरीकों से व्यवस्थित किया जा सकता है ताकि सभी स्वर एक साथ आएं?", 
    english: "Arrangements of 'DAUGHTER' with all vowels together?", 
    options: ["A) 4320","B) 2160","C) 8640","D) 1080"], 
    answer: 0, 
    note: "हल: 6!×3! = 720×6 = 4320 | स्वर: A, U, E | Vowels: A, U, E" 
  },
  
  { 
    num: 14, 
    hindi: "9 बिंदुओं में से 4 संरेखीय हैं — कितने त्रिभुज बनेंगे?", 
    english: "9 points in a plane, 4 are collinear — how many triangles can be formed?", 
    options: ["A) 76","B) 80","C) 84","D) 88"], 
    answer: 1, 
    note: "हल: ⁹C₃ − ⁴C₃ = 84 − 4 = 80" 
  },
  
  { 
    num: 15, 
    hindi: "शब्द 'PCAPBPA' के अक्षरों को कितने तरीकों से व्यवस्थित किया जा सकता है?", 
    english: "In how many ways can letters of 'PCAPBPA' be arranged?", 
    options: ["A) 210","B) 420","C) 630","D) 840"], 
    answer: 1, 
    note: "हल: 7!/(3!×2!) = 5040/12 = 420 | P तीन बार, A दो बार | P×3, A×2" 
  }
];

// Sections define karo - optional (questions ko groups mein divide karta hai)
const sections = [
  { label: "प्रश्न 1–5 | Questions 1–5 (फैक्टोरियल और शब्द | Factorial & Words)", start: 0, end: 5 },
  { label: "प्रश्न 6–10 | Questions 6–10 (समिति और संख्याएं | Committee & Numbers)", start: 5, end: 10 },
  { label: "प्रश्न 11–15 | Questions 11–15 (गोल मेज और बिंदु | Circular & Points)", start: 10, end: 15 }
];

// ═══════════════════════════════════════════════════════════════════
// ⚠️ NEECHE KA CODE TOUCH MAT KARO | DON'T EDIT BELOW THIS LINE
// ═══════════════════════════════════════════════════════════════════

let userAnswers = new Array(questions.length).fill(null);
let score = 0;

// Apply config
document.getElementById('quizIcon').textContent = QUIZ_CONFIG.icon;
document.getElementById('quizTitleHindi').textContent = QUIZ_CONFIG.titleHindi;
document.getElementById('quizTitleEnglish').textContent = QUIZ_CONFIG.titleEnglish;
document.getElementById('quizSubject').innerHTML = QUIZ_CONFIG.subject;
document.getElementById('totalTxt').textContent = ` / ${questions.length}`;

function renderQuiz() {
  const c = document.getElementById('quizContainer');
  let html = '';
  sections.forEach(sec => {
    html += `<div class="section-label">${sec.label}</div>`;
    for (let i = sec.start; i < sec.end; i++) {
      const q = questions[i];
      html += `
        <div class="q-card" id="card-${i}">
          <div class="q-header">
            <div class="q-num">${q.num}</div>
            <div class="q-text-wrap">
              <div class="q-hindi">${q.hindi}${q.bonus ? '<span class="bonus-tag">BONUS</span>' : ''}</div>
              <div class="q-english">${q.english}</div>
            </div>
          </div>
          <div class="options-grid">
            ${q.options.map((opt, oi) => `<button class="opt-btn" id="opt-${i}-${oi}" onclick="pick(${i},${oi})">${opt}</button>`).join('')}
          </div>
          <div class="answer-reveal" id="reveal-${i}">
            <div class="ans-label">✓ सही उत्तर | Correct Answer</div>
            <div class="ans-text" id="ans-${i}"></div>
            ${q.note ? `<div class="ans-note">${q.note}</div>` : ''}
          </div>
        </div>`;
    }
    html += `<div class="divider"></div>`;
  });
  c.innerHTML = html;
}

function pick(qi, oi) {
  if (userAnswers[qi] !== null) return;
  userAnswers[qi] = oi;
  const q = questions[qi];
  for (let i = 0; i < q.options.length; i++) {
    const btn = document.getElementById(`opt-${qi}-${i}`);
    btn.disabled = true;
    if (i === q.answer) btn.classList.add('correct');
    else if (i === oi) btn.classList.add('wrong');
  }
  document.getElementById(`ans-${qi}`).textContent = q.options[q.answer];
  document.getElementById(`reveal-${qi}`).classList.add('show');
  if (oi === q.answer) score++;
  updateScore();
}

function updateScore() {
  const att = userAnswers.filter(a => a !== null).length;
  document.getElementById('scoreNum').textContent = score;
  document.getElementById('attemptedTxt').textContent = att + ' attempted';
  document.getElementById('progressBar').style.width = (att / questions.length * 100) + '%';
}

function resetAll() {
  userAnswers = new Array(questions.length).fill(null);
  score = 0;
  renderQuiz();
  updateScore();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function createWaterEffects() {
  const bg = document.getElementById('waterBg');
  // Bubbles
  for (let i = 0; i < 18; i++) {
    const b = document.createElement('div');
    b.className = 'bubble';
    const s = 8 + Math.random() * 30;
    b.style.cssText = `width:${s}px;height:${s}px;left:${Math.random()*100}%;bottom:${Math.random()*20}%;animation-duration:${9+Math.random()*16}s;animation-delay:${-Math.random()*15}s;`;
    bg.appendChild(b);
  }
  // Ripples
  for (let i = 0; i < 5; i++) {
    const r = document.createElement('div');
    r.className = 'ripple';
    const sz = 60 + Math.random() * 120;
    r.style.cssText = `width:${sz}px;height:${sz}px;left:${Math.random()*90}%;top:${Math.random()*90}%;animation-duration:${5+Math.random()*5}s;animation-delay:${-Math.random()*8}s;`;
    bg.appendChild(r);
  }
}

renderQuiz();
createWaterEffects();
