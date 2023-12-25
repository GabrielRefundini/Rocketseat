import {Router} from './router.js'
const router = new Router()
router.add('/', '/pages/home.html')
router.add('/universo', '/pages/universo.html')
router.add('/exploracao', '/pages/exploracao.html')
router.add(404, '/pages/404.html')


router.handle()
window.onpopstate = () => router.handle();
window.route = () => router.route();

    // const ko = "/universo";
    // const elNavLinks = document.querySelectorAll("a");

    
    
    // elNavLinks.forEach(link => {
    //     link.addEventListener('click', () => {
            // path = document.querySelector(`[href='${window.location.pathname}']`);
            // console.log(elNavLinks)

            // document.querySelector('.active')?.classList.remove('active');
            // link.classList.add('active');
            // if (asd === link){
            //     console.log('true')
            // }
        // });

    // })

