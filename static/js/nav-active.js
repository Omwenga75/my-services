(function(){
    function setActiveNav(){
        try{
            const links = document.querySelectorAll('.nav-links a');
            const path = location.pathname || '/';
            const hash = location.hash || '';
            links.forEach(a=>{
                a.classList.remove('active');
                a.removeAttribute('aria-current');
                const href = a.getAttribute('href') || '';
                // Normalize
                const url = href.split('?')[0].split('#')[0];
                if(url === path){
                    a.classList.add('active');
                    a.setAttribute('aria-current','page');
                } else if(url !== '/' && path.startsWith(url)){
                    a.classList.add('active');
                    a.setAttribute('aria-current','page');
                }
            });
        }catch(e){/* silent */}
    }

    let sectionObserver = null;

    // When on pages that have in-page sections (like #contact), observe sections
    function observeSections(){
        try{
            if(sectionObserver){
                sectionObserver.disconnect();
                sectionObserver = null;
            }

            const links = Array.from(document.querySelectorAll('.nav-links a'));
            const sectionLinks = links.filter(a=> (a.getAttribute('href')||'').startsWith('#'));
            if(sectionLinks.length === 0) return;

            const idToLink = {};
            sectionLinks.forEach(a=>{
                const href = a.getAttribute('href');
                const id = href.replace('#','');
                idToLink[id] = a;
            });

            const options = { root: null, rootMargin: '0px', threshold: [0.4, 0.6] };
            sectionObserver = new IntersectionObserver((entries)=>{
                entries.forEach(entry=>{
                    const id = entry.target.id;
                    const link = idToLink[id];
                    if(!link) return;
                    if(entry.intersectionRatio >= 0.5){
                        document.querySelectorAll('.nav-links a').forEach(a=>{ a.classList.remove('active'); a.removeAttribute('aria-current'); });
                        link.classList.add('active');
                        link.setAttribute('aria-current','page');
                    } else {
                        setActiveNav();
                    }
                });
            }, options);

            Object.keys(idToLink).forEach(id=>{
                const el = document.getElementById(id);
                if(el) sectionObserver.observe(el);
            });
        }catch(e){/* ignore */}
    }

    // Run on initial load
    document.addEventListener('DOMContentLoaded', setActiveNav);

    // Also run after full load (in case nav is modified dynamically)
    window.addEventListener('load', setActiveNav);

    // Observe nav changes (for dynamic replacements like login state)
    const observer = new MutationObserver((mutations)=>{
        for(const m of mutations){
            if(m.type === 'childList'){
                setActiveNav();
                observeSections();
                break;
            }
        }
    });
    const navContainer = document.querySelector('.nav-links');
    if(navContainer) observer.observe(navContainer, { childList: true, subtree: true });

    // Try to observe in-page sections on DOM ready
    document.addEventListener('DOMContentLoaded', observeSections);
    window.addEventListener('load', observeSections);

    // Also add click handlers so same-page clicks mark active immediately
    document.addEventListener('click', function(e){
        const a = e.target.closest && e.target.closest('.nav-links a');
        if(!a) return;
        // small delay to allow navigation to update location
        setTimeout(setActiveNav, 50);
    });
})();
