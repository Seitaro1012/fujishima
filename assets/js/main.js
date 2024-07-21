import { gu_header, gu_footer } from './layout.js';


document.addEventListener('DOMContentLoaded',function(){

  document.getElementById('fk-header-js').insertAdjacentHTML('afterbegin', gu_header);
  document.getElementById('fk-footer-js').insertAdjacentHTML('afterbegin', gu_footer);

  document.querySelector('.js-toggleButton').addEventListener('click', function(){
    document.querySelector('body').classList.toggle('js-overlay');
    const ol = document.querySelector('.fk-overlay');
    ol.classList.toggle('js-show');
    document.querySelector('.fk-mobile-menu-icon').classList.toggle('js-open');

  });

});


/**
 * アニメーションタイトル
 */
document.addEventListener('DOMContentLoaded', () => {
  const els = document.querySelectorAll('.js-animate-title');
    
  if(els.length > 0){

    // els.forEach(function(el){      
    //   const str = el.innerHTML.trim().split("");
      
    //   if(el.classList.contains('jsop-spbr')){
    //     reduceStr.call(el,str, true);
    //   } else {
    //     reduceStr.call(el,str, false);
    //   }
    // });

    //要素の監視
    function callback(entries, obs) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('pon');
          const str = entry.target.innerHTML.trim().split("");
          
          if(entry.target.classList.contains('jsop-spbr')){
            reduceStr.call(entry.target,str, true);
          } else {
            reduceStr.call(entry.target,str, false);
          }
          obs.unobserve(entry.target);
        }
      });
    }

    const options = {
      root: null,
      threshold: 1,
    };
    const observer = new IntersectionObserver(callback, options);
    els.forEach(target => {
      observer.observe(target);
    });





    
    function reduceStr(str,br){
      this.innerHTML = str.reduce((acc, curr) => {
        curr = curr.replace(/\s+/, '&nbsp;');
        if(curr == '&nbsp;' && br){
          return `${acc}<span class="u-space"><br class="only-sp"></span>`;
        } else {
          return `${acc}<span class="char">${curr}</span>`;
        }
      }, "");
    } 
  }

});


document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('.fk-button-1 ');
  links.forEach(link => {
      link.addEventListener('click', function(e) {
          const url = new URL(this.href);
          if (url.origin === window.location.origin && url.pathname === window.location.pathname) {
              e.preventDefault();
              const targetId = url.hash.substring(1);
              const targetElement = document.getElementById(targetId);
              if (targetElement) {
                  targetElement.scrollIntoView({ behavior: 'smooth' });
              }
          }
      });
  });
});


$(document).ready(function() {
  $(window).on('scroll', function() {
      $('.fade-in-element').each(function() {
          var elementTop = $(this).offset().top;
          var windowBottom = $(window).scrollTop() + $(window).height();
          
          if (windowBottom > elementTop) {
              $(this).css('opacity', 1);
          }
      });
  });
});

/**
 オブジェクトがフェードインするアニメーション
 */

$(window).scroll(function() {
  $('.fadeIn').each(function() {
    const scrollPosition = $(window).scrollTop();
    const windowHeight = $(window).height();
    const fadeinTargetTop = $(this).offset().top;

    if (scrollPosition >= fadeinTargetTop - windowHeight / 2) {
      $(this).addClass('is-active');
    }
  });
});

$(document).ready(function() {
  $('.openFadeIn').addClass('is-active');
});