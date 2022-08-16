import { createOptimizedPicture } from '../../scripts/scripts.js';

export default function decorate(block) {
    /* change to ul, li */
    const ul = document.createElement('ul');
    [...block.children].forEach((row, i) => {
        const li = document.createElement('li');
        li.innerHTML = row.innerHTML;
        [...li.children].forEach((div) => {
            if (div.children.length === 1 && div.querySelector('picture')) {
                div.className = 'cardsgrid-card-image';
                li.prepend(div);
            } else if (div.querySelector('.icon')) {
                div.className = 'cardsgrid-card-icon';
            } else {
                div.className = 'cardsgrid-card-body';
            }
        });
        setTimeout(() => {
            li.classList.add('cardsgrid-card-appear');
        }, (i + 1) * 100);
        if (block.classList.contains('highlight')) {
            block.parentElement.classList.add('highlight');
        }
        ul.append(li);
    });
    ul.querySelectorAll('img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));
    block.textContent = '';
    block.append(ul);
}