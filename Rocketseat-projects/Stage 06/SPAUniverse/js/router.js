export class Router {
    routes = {}
    add(routeName, page){
        this.routes[routeName] = page
    }
    route(event){
        event = event || window.event
        event.preventDefault()

        window.history.pushState({}, "", event.target.href)
        this.handle()
        this.changeBackground()
        this.keepMenuActive()
    }
    handle(){
        const { pathname } = window.location
        const route = this.routes[pathname] || this.routes[404]

        fetch(route)
        .then(data => data.text())
        .then(html => {
            document.querySelector('#app').innerHTML = html
        });
        }    
    changeBackground(){
        let body = document.querySelector("body");
        let currentPage = window.location;
        body.style.background = `url('./assets${currentPage.pathname}bg.png') no-repeat center center/cover`
    }

    keepMenuActive(){
        let elPath = document.querySelector(`[href='${window.location.pathname}']`);
        const previousActiveElement = document.querySelector('.active');
        if (previousActiveElement) {
            previousActiveElement.classList.toggle('active');
        }
        elPath.classList.toggle('active');
    
    }

        
    }