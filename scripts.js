 (function(){
            // ---- Abas do portfólio ----
            var tabs = document.querySelectorAll('.tab-btn');
            var panels = {
                'tab-sites': document.getElementById('panel-sites'),
                'tab-identidade': document.getElementById('panel-identidade'),
                'tab-apps': document.getElementById('panel-apps'),
                'tab-video': document.getElementById('panel-video')
            };
            tabs.forEach(function(btn){
                btn.addEventListener('click', function(){
                    tabs.forEach(function(b){ b.setAttribute('aria-selected','false'); });
                    Object.keys(panels).forEach(function(k){
                        panels[k].hidden = true;
                        panels[k].classList.remove('active');
                    });
                    btn.setAttribute('aria-selected','true');
                    var panel = panels[btn.id];
                    panel.hidden = false;
                    panel.classList.add('active');
                });
            });

            // ---- Cabeçalho: referência usada pelo menu mobile e pela sombra ao rolar ----
            var header = document.getElementById('siteHeader');

            // ---- Menu mobile (hambúrguer) ----
            var menuBtn = document.getElementById('menuBtn');
            var mobileMenu = document.getElementById('mobileMenu');
            var closeMenu = function(){
                header.classList.remove('menu-open');
                menuBtn.setAttribute('aria-expanded', 'false');
                menuBtn.setAttribute('aria-label', 'Abrir menu');
            };
            if (menuBtn && mobileMenu){
                menuBtn.addEventListener('click', function(){
                    var isOpen = header.classList.toggle('menu-open');
                    menuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
                    menuBtn.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
                });
                mobileMenu.querySelectorAll('a').forEach(function(link){
                    link.addEventListener('click', closeMenu);
                });
                document.addEventListener('keydown', function(e){
                    if (e.key === 'Escape') closeMenu();
                });
            }

            // ---- Sombra sutil ao rolar (o cabeçalho já é fixed) ----
            var onScroll = function(){
                if (window.scrollY > 8){ header.classList.add('scrolled'); }
                else{ header.classList.remove('scrolled'); }
            };
            window.addEventListener('scroll', onScroll, { passive: true });
            onScroll();

            // ---- Reveal suave ao rolar ----
            var reveals = document.querySelectorAll('.reveal');
            if ('IntersectionObserver' in window){
                var io = new IntersectionObserver(function(entries){
                    entries.forEach(function(entry){
                        if (entry.isIntersecting){
                            entry.target.classList.add('in-view');
                            io.unobserve(entry.target);
                        }
                    });
                }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
                reveals.forEach(function(el){ io.observe(el); });
            } else {
                reveals.forEach(function(el){ el.classList.add('in-view'); });
            }
        })();