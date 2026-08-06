// 明暗主题切换:localStorage 记忆手动选择,默认明亮模式
(function () {
  var root = document.documentElement;
  var saved = null;
  try { saved = localStorage.getItem('theme'); } catch (e) {}
  if (saved === 'dark') root.classList.add('dark');

  function syncBtn() {
    var dark = root.classList.contains('dark');
    document.querySelectorAll('.theme-toggle').forEach(function (btn) {
      btn.classList.toggle('is-dark', dark);
    });
  }

  function wire() {
    document.querySelectorAll('.theme-toggle').forEach(function (btn) {
      btn.addEventListener('click', function () {
        if (root.classList.contains('dark')) {
          root.classList.remove('dark');
          try { localStorage.setItem('theme', 'light'); } catch (e) {}
        } else {
          root.classList.add('dark');
          try { localStorage.setItem('theme', 'dark'); } catch (e) {}
        }
        syncBtn();
      });
    });
    syncBtn();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', wire);
  } else {
    wire();
  }
})();
