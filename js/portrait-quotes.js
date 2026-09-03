/* ── Portrait Interactive Speech Bubble & Typewriter Effect ── */
(function () {
  'use strict';

  const quotes = [
    {
      vi: 'Slogan của tôi là "Pain paves the way" vì cơn đau là thứ cảm nhận được sau vấp ngã, và rồi, đứng dậy (Ở đây là cơn đau răng).',
      en: 'My motto is "Pain paves the way" because pain is what you feel after stumbling, and then, standing back up (In this case, toothache).'
    },
    {
      vi: 'Sinh viên UET đã được 2 năm nhưng cổng trường chưa có.',
      en: "Two years as a UET student, and our campus still doesn't have an official front gate."
    },
    {
      vi: 'Joke of the day: Con gì có 2 chân, 2 tay, ngồi máy tính 12h/ngày? — Tôi.',
      en: 'Joke of the day: What has two legs, two arms, and sits at a PC 12 hours a day? — Me.'
    },
    {
      vi: 'Tính năng này có cần thiết cho Portfolio không? Không.',
      en: 'Is this feature necessary for a portfolio? Absolutely not.'
    },
    {
      vi: 'Band nhạc tôi yêu thích là "Chỉ còn band nhạc tôi, một thế giới bé nhỏ thôi".',
      en: 'My favorite band is "Chỉ còn band nhạc tôi, một thế giới bé nhỏ thôi".',
      url: 'https://www.youtube.com/watch?v=vsRS7oGqPTg'
    },
    {
      vi: 'Thể loại nhạc của tôi rất đa dạng: từ nhạc đỏ, nhạc Trịnh, nhạc indie (đây không phải thể loại nhạc), nhạc rap, đến heavy metal.',
      en: 'My music taste is wildly diverse: from revolutionary songs and Trịnh music to indie (not actually a genre), rap, and heavy metal.'
    },
    {
      vi: '"The only thing they fear is you" là peak của dòng heavy metal, ít nhất đối với một bài nhạc game.',
      en: '"The only thing they fear is you" is the pinnacle of heavy metal, at least for a video game soundtrack.',
      url: 'https://www.youtube.com/watch?v=kpnW68Q8ltc'
    },
    {
      vi: 'Qua các kì thì thứ hạng của tôi sẽ tụt dần: từ top 2 ngành → 3 → 4 → 5 (hiện tại).',
      en: 'With each semester my class rank gently slips: top 2 of the major → 3 → 4 → 5 (currently).'
    },
    {
      vi: 'Logo của tôi là sự kết hợp của các chữ cái trong nickname "Anomal".',
      en: 'My logo is a monogram combining the letters of my nickname "Anomal".'
    },
    {
      vi: 'Anomal có nghĩa là bất thường (tiếng Pháp, chắc vậy), hoặc A normal (person).',
      en: 'Anomal means abnormal (in French, probably), or simply A normal (person).'
    },
    {
      vi: '"Nhìn quanh lần cuối, rừng thay lá ngậm ngùi..."',
      en: '"Nhìn quanh lần cuối, rừng thay lá ngậm ngùi..."',
      url: 'https://www.youtube.com/watch?v=kSjj0LlsqnI'
    },
    {
      vi: 'Tôi đã trải qua 2 năm được bố mẹ trợ cấp học đại học mà không cần đi làm.',
      en: "I've spent two full years of university supported by my parents without having to work."
    },
    {
      vi: 'Dòng game yêu thích của tôi là Boomer Shooter.',
      en: 'My favorite video game genre is the Boomer Shooter.'
    },
    {
      vi: '"Có những người sống những ngày tàn, có những người gục tại bàn, xã hội long tranh hổ đấu nên mấy ông anh xăm ngực đại bàng."',
      en: '"Có những người sống những ngày tàn, có những người gục tại bàn, xã hội long tranh hổ đấu nên mấy ông anh xăm ngực đại bàng."',
      url: 'https://www.youtube.com/watch?v=kSjj0LlsqnI'
    },
    {
      vi: '"Rip and Tear until it is done."',
      en: '"Rip and Tear until it is done."',
      url: 'https://www.youtube.com/watch?v=2qY8h2ScKJQ'
    },
    {
      vi: 'Đức tin duy nhất của tôi là tin vào Hoàng đế — Hoàng đế bảo vệ.',
      en: 'My only faith is in the God-Emperor — The Emperor Protects.'
    },
    {
      vi: 'Thật ngạc nhiên là bạn có thể học được rất nhiều từ vũ trụ SCP thay vì mấy video kinh dị rẻ tiền.',
      en: "It's surprising how much you can learn from the SCP universe rather than cheap horror videos.",
      url: 'https://scp-wiki.wikidot.com/'
    },
    {
      vi: '"Hate. Let me tell you how much I\'ve come to hate you since I began to live."',
      en: '"Hate. Let me tell you how much I\'ve come to hate you since I began to live."',
      url: 'https://www.imdb.com/title/tt0142392/characters/nm0255196/'
    },
    {
      vi: '"Limbo, Lust, all gone... With Gluttony soon to follow... You\'ve taken everything from me, machine... And now all that remains is perfect hatred."',
      en: '"Limbo, Lust, all gone... With Gluttony soon to follow... You\'ve taken everything from me, machine... And now all that remains is perfect hatred."',
      url: 'https://en.wikipedia.org/wiki/Ultrakill'
    },
    {
      vi: 'Tôi rất thích vibe code và 100% những gì các bạn được thấy là vibe code trên Antigravity.',
      en: "I really love vibe coding, and 100% of what you see here was vibe coded on Antigravity."
    },
    {
      vi: '"Phân khu Phản truyền nhận thức không tồn tại."',
      en: '"Phân khu Phản truyền nhận thức không tồn tại."',
      url: 'https://scp-wiki.wikidot.com/antimemetics-division-hub'
    },
    {
      vi: 'Tôi có đam mê rất lớn với đồ công nghệ nói chung và laptop, PC nói riêng.',
      en: 'I have a huge passion for tech gadgets in general, and custom PCs & laptops in particular.'
    },
    {
      vi: 'Cần tìm người cùng trọ.',
      en: 'Looking for a roommate.'
    }
  ];

  // Mark quote-only lines with isQuote: true
  // Index of quotes:
  // 0: Slogan (intro)
  // 1: UET (intro)
  // 2: Joke (intro)
  // 3: Tính năng này (intro)
  // 4: Band nhạc (intro/music)
  // 5: Thể loại nhạc (intro)
  // 6: "The only thing they fear is you" (quote)
  // 7: Thứ hạng ngành (intro)
  // 8: Logo nickname (intro)
  // 9: Anomal nghĩa là (intro)
  // 10: "Nhìn quanh lần cuối..." (quote)
  // 11: Trợ cấp 2 năm (intro)
  // 12: Boomer Shooter (intro)
  // 13: "Có những người sống những ngày tàn..." (quote)
  // 14: "Rip and Tear until it is done." (quote)
  // 15: Hoàng đế bảo vệ (intro)
  // 16: SCP (intro)
  // 17: "Hate. Let me tell you..." (quote)
  // 18: "Limbo, Lust, all gone..." (quote)
  // 19: Vibe code Antigravity (intro)
  // 20: "Phân khu Phản truyền nhận thức không tồn tại." (quote)
  // 21: Đam mê công nghệ (intro)
  // 22: Cần tìm người cùng trọ (intro)

  // Identify pure quotes (starting with quote marks or lyric/game lines)
  const quoteIndices = [6, 10, 13, 14, 17, 18, 20];
  const introIndices = [];
  for (let i = 0; i < quotes.length; i++) {
    if (!quoteIndices.includes(i)) {
      introIndices.push(i);
    }
  }

  const RECENT_HISTORY_LIMIT = 5;
  const recentIndexes = [];
  let triggerCount = 0;
  let cancelTypewriter = null;
  let isHovered = false;
  let currentQuote = null;

  function getRandomQuote() {
    if (quotes.length <= 1) return quotes[0];
    
    triggerCount++;

    let available = [];

    // First 2 triggers: MUST be normal intro quotes
    if (triggerCount <= 2) {
      available = introIndices.filter((idx) => !recentIndexes.includes(idx));
      if (available.length === 0) available = introIndices;
    } else {
      // From 3rd trigger onward: pick from all quotes, excluding last 5
      const maxHistory = Math.min(RECENT_HISTORY_LIMIT, quotes.length - 1);
      available = [];
      for (let i = 0; i < quotes.length; i++) {
        if (!recentIndexes.includes(i)) {
          available.push(i);
        }
      }
      if (available.length === 0) {
        available = Array.from({ length: quotes.length }, (_, i) => i);
      }
    }

    // Pick random from available
    const chosenIndex = available[Math.floor(Math.random() * available.length)];
    
    // Track history
    recentIndexes.push(chosenIndex);
    const maxHistory = Math.min(RECENT_HISTORY_LIMIT, quotes.length - 1);
    if (recentIndexes.length > maxHistory) {
      recentIndexes.shift();
    }

    return quotes[chosenIndex];
  }

  function getCurrentLang() {
    if (window.i18n && typeof window.i18n.getCurrentLang === 'function') {
      return window.i18n.getCurrentLang();
    }
    return localStorage.getItem('portfolio-lang') || 'vi';
  }

  function typewrite(element, text, speed = 20, onComplete) {
    if (cancelTypewriter) {
      cancelTypewriter();
      cancelTypewriter = null;
    }

    element.textContent = '';
    const cursor = document.createElement('span');
    cursor.className = 'typewriter-cursor';
    element.appendChild(cursor);

    let charIdx = 0;
    let stopped = false;

    const timer = setInterval(() => {
      if (stopped || charIdx >= text.length) {
        clearInterval(timer);
        if (!stopped && cursor.parentNode) {
          cursor.remove();
        }
        if (!stopped && onComplete) {
          onComplete();
        }
        return;
      }
      cursor.insertAdjacentText('beforebegin', text[charIdx]);
      charIdx++;
    }, speed);

    cancelTypewriter = () => {
      stopped = true;
      clearInterval(timer);
    };
  }

  function init() {
    const portrait = document.querySelector('.about-portrait');
    const bubbleContent = document.querySelector('.about-bubble__content');
    const subBubble = document.querySelector('.about-bubble-sub');
    const subText = document.querySelector('.about-bubble-sub__text');
    if (!portrait || !bubbleContent) return;

    function renderSubBubble(quote, lang) {
      if (!subBubble) return;
      if (quote && quote.url) {
        subBubble.href = quote.url;
        if (subText) {
          subText.textContent = lang === 'vi' ? 'Click vào đây' : 'Click Here';
        }
        subBubble.style.display = 'inline-flex';
      } else {
        subBubble.style.display = 'none';
        subBubble.href = '#';
      }
    }

    function triggerQuote() {
      currentQuote = getRandomQuote();
      const lang = getCurrentLang();
      const text = currentQuote[lang] || currentQuote['en'];
      
      // Hide sub bubble initially while typing starts, or display it immediately
      renderSubBubble(currentQuote, lang);

      typewrite(bubbleContent, text, 18);
    }

    // Mouse enter / hover
    portrait.addEventListener('mouseenter', () => {
      isHovered = true;
      triggerQuote();
    });

    // Mouse leave
    portrait.addEventListener('mouseleave', () => {
      isHovered = false;
      if (cancelTypewriter) {
        cancelTypewriter();
        cancelTypewriter = null;
      }
      setTimeout(() => {
        if (!isHovered && !portrait.classList.contains('is-revealed')) {
          bubbleContent.textContent = '';
          if (subBubble) subBubble.style.display = 'none';
        }
      }, 250);
    });

    // Tap/click for touch devices or interaction
    portrait.addEventListener('click', (e) => {
      // If user clicked the link sub-bubble, let it navigate
      if (e.target.closest('.about-bubble-sub')) return;

      isHovered = true;
      triggerQuote();
    });

    // Language change listener
    window.addEventListener('portfolio-lang-change', () => {
      if (isHovered || portrait.classList.contains('is-revealed')) {
        const lang = getCurrentLang();
        if (currentQuote) {
          const text = currentQuote[lang] || currentQuote['en'];
          renderSubBubble(currentQuote, lang);
          typewrite(bubbleContent, text, 18);
        } else {
          triggerQuote();
        }
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
