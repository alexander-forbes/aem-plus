export default function decorate(block) {
    const cols = [...block.firstElementChild.children];
    block.classList.add(`column-${cols.length}-cols`);
}