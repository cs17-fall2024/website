function toggle() {
    // toggles the menu on small screens
    var dropdownContent = document.getElementById('dropdown-content');
    if (dropdownContent.style.display === 'none'){
        dropdownContent.style.display = 'flex';
        dropdownContent.style.flexDirection = 'column';
    } else {
        dropdownContent.style.display = 'none'
    }
}

document.addEventListener('DOMContentLoaded', () => {
    function adjustLayout() {
        var nav = document.getElementById('nav-bar');
        var dropdown = document.getElementById('dropdown-container');
        var button = document.querySelector('.dropbtn');
        if (window.innerWidth >= 750) {
            nav.style.transform = 'translateY(0)';
            dropdown.style.display = 'none';
            button.style.display = 'none';
        } else {
            nav.style.transform = 'translateY(-100%)';
            dropdown.style.display = 'flex';
            button.style.display = 'block';
        }
    }

    // Call adjustLayout on page load
    adjustLayout();

    // Call adjustLayout on window resize
    window.addEventListener('resize', adjustLayout);
});

document.addEventListener('DOMContentLoaded', () => {
    const staffCards = document.querySelectorAll('#staff-card');
    const staffFeature = document.getElementById('staff-feature');

    staffCards.forEach(card => {
        card.addEventListener('mouseover', () => {
            const imgSrc = card.querySelector('img').src;
            const name = card.querySelector('h1').textContent.trim();
            const role = card.querySelector('h3').textContent.trim();
            const bio = card.querySelector('p') ? card.querySelector('p').textContent.trim() : '';

            staffFeature.innerHTML = `
                <img src="${imgSrc}" alt="${name}">
                <h1>${name}</h1>
                <h3>${role}</h3>
                <p>${bio}</p>
            `;
        });
    });
});