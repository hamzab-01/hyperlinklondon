var anchors = [].slice.call(document.querySelectorAll(".level-item > a"));

var pageable = new Pageable(".pg-container", {
    animation: 400,
    delay: 100,
    onInit: init,
    onFinish: update,
});

function init() {

}

function update() {
    anchors.forEach((element, i) => {
        element.classList.toggle("nav-active", i === this.index+1)
    });
}