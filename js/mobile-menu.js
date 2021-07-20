// class MobileMenu {
//     constructor() {
//         this.DOM = {};
//         this.DOM.btn = document.querySelector('.mobile-menu_btn');
//         this.DOM.wrapper = document.querySelector('#global-container');
//         this.eventType = this._getEventType();
//         this._addEvent();
//     }

//     _getEventType() {
//         return window.ontouchstart ? 'touchstart' : 'click';
//     }

//     _toggle() {
//         this.DOM.container.classList.toggle('menu-open');
//     }

//     _addEvent() {
//         this.DOM.btn.addEventListener(this.eventType, this._toggle.bind(this));
//     }
// }

document.getElementById("navbtn").onclick = function(){
    document.querySelector('html').classList.toggle('open');
  }