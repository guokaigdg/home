// 中英双语切换:运行时替换 data-i18n 元素文本,localStorage 记忆偏好
(function () {
  const I18N = {
    zh: {
      'nav.home': '首页',
      'nav.payment': '投喂区',
      'hero.role': '前端工程师<span class="dot">·</span>北京',
      'hero.bio': '两猫家长，一只英短，一只美短。业余骑行、摄影、滑雪，也做开源。',
      'tag.frontend': '前端开发',
      'tag.cycling': '骑行',
      'tag.skiing': '滑雪',
      'tag.opensource': '开源',
      'contact.title': '联系 / Contact',
      'contact.email': '邮箱',
      'pay.title': '感谢投喂',
      'pay.bio': '你的每一份心意，都会变成"辛巴"和"大白"的罐头和小鱼干',
      'pay.donate': '投喂方式 / Donate',
      'pay.wechat': '微信',
      'pay.alipay': '支付宝',
      'pay.scan': '扫一扫',
      'pay.thanks': '扫码投喂，给猫咪加餐'
    },
    en: {
      'nav.home': 'Home',
      'nav.payment': 'Donate',
      'hero.role': 'Frontend Engineer<span class="dot">·</span>Beijing',
      'hero.bio': 'Cat parent to a British Shorthair and an American Shorthair. Cycling, photography, skiing, and open source in free time.',
      'tag.frontend': 'Frontend',
      'tag.cycling': 'Cycling',
      'tag.skiing': 'Skiing',
      'tag.opensource': 'Open Source',
      'contact.title': 'Contact',
      'contact.email': 'Email',
      'pay.title': 'Thank You',
      'pay.bio': 'Every contribution becomes food and treats for Xinba and Dabai.',
      'pay.donate': 'Donate',
      'pay.wechat': 'WeChat',
      'pay.alipay': 'Alipay',
      'pay.scan': 'Scan',
      'pay.thanks': 'Scan to treat the cats'
    }
  };

  // 需要以 innerHTML 渲染的 key(含 span 等结构)
  const HTML_KEYS = ['hero.role'];

  function applyLang(lang) {
    const dict = I18N[lang] || I18N.en;
    document.documentElement.lang = lang === 'en' ? 'en' : 'zh-CN';
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (dict[key] === undefined) return;
      if (HTML_KEYS.indexOf(key) !== -1) {
        el.innerHTML = dict[key];
      } else {
        el.textContent = dict[key];
      }
    });
    document.querySelectorAll('.lang-toggle').forEach(btn => {
      btn.textContent = lang === 'zh' ? 'En' : '中';
    });
    try { localStorage.setItem('lang', lang); } catch (e) {}
  }

  function toggleLang() {
    const current = (function () {
      try { return localStorage.getItem('lang') || 'en'; }
      catch (e) { return 'en'; }
    })();
    applyLang(current === 'zh' ? 'en' : 'zh');
  }

  function init() {
    let saved = 'en';
    try { saved = localStorage.getItem('lang') || 'en'; } catch (e) {}
    applyLang(saved);
    // 译文已应用,移除隐藏类,避免跳页时中英闪动
    document.documentElement.classList.remove('i18n-loading');
    document.querySelectorAll('.lang-toggle').forEach(btn => {
      btn.addEventListener('click', toggleLang);
    });
  }

  // 脚本通常放在 body 末尾,DOM 已就绪直接执行;否则等 DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
