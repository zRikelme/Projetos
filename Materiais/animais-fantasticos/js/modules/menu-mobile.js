import outsideClick from './outsideClick.js';

export default class MenuMobile {
  constructor(menuButton, menuList, events) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);

    this.openMenu = this.openMenu.bind(this);

    this.activeClass = 'active';
  
    this.events = ['touchstart', 'click'];
    // define touchstart e click como argumento padrao de events
    // caso o usuario nao defina.
    if(events === undefined) {
      this.events = ['touchstart', 'click'];
    }
    else {
      this.events = events;
    };
  }

   openMenu() {
    this.menuList.classList.add(this.activeClass);
    this.menuButton.classList.add(this.activeClass);
    outsideClick(this.menuList, this.events, () => {
      this.menuList.classList.remove(this.activeClass);
      this.menuButton.classList.remove(this.activeClass);
    })
  }

  addMenuMobileEvents() {
    this.events.forEach(evento => this.menuButton.addEventListener(evento, this.openMenu));
  }

  
  init() {
  if(this.menuButton && this.menuList) {
    this.addMenuMobileEvents()
  }
  return this;
 }
  }
