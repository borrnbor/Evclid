document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.tabs__btn').forEach(function(tabsBtn) {
      tabsBtn.addEventListener('click', function(event) {
        const path = event.currentTarget.dataset.path

        document.querySelectorAll('.tab-content').forEach(function(tabContent) {
          tabContent.classList.remove('tab-content-active')
        })
        document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')
      })
  })
  const burger = document.querySelector('.navicon');
  const nav = document.querySelector('.header__nav');
    burger.addEventListener('click', () => {
    burger.classList.toggle('navicon-active')
  });
  burger.addEventListener('click', () => {
    nav.classList.toggle('header__nav-active')
  });
  burger.addEventListener('click', () => {
    nav.classList.toggle('open-menu')
  });
})



