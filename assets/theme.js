// 明暗主题切换:localStorage 记忆手动选择,默认跟随系统偏好
(function () {
  var root = document.documentElement;
  var saved = null;
  try { saved = localStorage.getItem('theme'); } catch (e) {}
  if (saved === 'dark') root.classList.add('dark');
  else if (saved === 'light') root.classList.add('light');

  function isDark() {
    if (root.classList.contains('dark')) return true;
    if (root.classList.contains('light')) return false;
    return !!(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
  }

  function syncBtn() {
    var dark = isDark();
    document.querySelectorAll('.theme-toggle').forEach(function (btn) {
      btn.classList.toggle('is-dark', dark);
    });
  }

  function wire() {
    document.querySelectorAll('.theme-toggle').forEach(function (btn) {
      btn.addEventListener('click', function () {
        if (isDark()) {
          root.classList.remove('dark');
          root.classList.add('light');
          try { localStorage.setItem('theme', 'light'); } catch (e) {}
        } else {
          root.classList.remove('light');
          root.classList.add('dark');
          try { localStorage.setItem('theme', 'dark'); } catch (e) {}
        }
        syncBtn();
      });
    });
    syncBtn();
    // 未手动选择时,跟随系统明暗变化同步按钮图标
    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', syncBtn);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', wire);
  } else {
    wire();
  }
})();
