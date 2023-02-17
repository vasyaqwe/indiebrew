export function getRelativeCoordinates(event, ref) {
    const position = {
        x: event.pageX + 50,
        y: event.pageY + 300
    };
    const scrollLeft = (window.pageXOffset !== undefined) ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft;
    const scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    const offset = {
        left: ref.offsetLeft,
        top: ref.offsetTop,
        width: ref.clientWidth,
        height: ref.clientHeight
    };

    let reference = ref.offsetParent;

    while (reference) {
        offset.left += reference.offsetLeft;
        offset.top += reference.offsetTop;
        reference = reference.offsetParent;
    }

    return {
        x: position.x - offset.left - scrollLeft,
        y: position.y - offset.top - scrollTop,
        width: offset.width,
        height: offset.height,
        centerX: (position.x - offset.left - offset.width / 2) / (offset.width / 2),
        centerY: (position.y - offset.top - offset.height / 2) / (offset.height / 2)
    };
}