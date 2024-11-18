function toggleTheme() {
    if (document.body.classList.contains("dark")) {
        document.body.classList.remove("dark");
        document.body.classList.add("light");
        document.getElementById("theme-icon").src = "media/icons/dark_mode.svg";
    } else {
        document.body.classList.remove("light");
        document.body.classList.add("dark");
        document.getElementById("theme-icon").src = "media/icons/light_mode.svg";
    }
}

function scrollCarousell(direction) {
    const scrollAmount = 900; // Adjust the scroll distance as needed
    const list = document.querySelector('#experience .carousell .job-list');
    const scrollLeft = list.scrollLeft;

    if (direction === 'left') {
        list.scrollTo({
            left: scrollLeft - scrollAmount,
            behavior: 'smooth'
        });

    } else if (direction === 'right') {
        list.scrollTo({
            left: scrollLeft + scrollAmount,
            behavior: 'smooth'
        });
    }
}

function updateIndicators() {
    const indicators = document.querySelectorAll('.indicator');
    const list = document.querySelector('#experience .carousell .job-list');
    const scrollLeft = list.scrollLeft;
    const scrollWidth = list.scrollWidth;
    const clientWidth = list.clientWidth;
    const scrollPercentage = (scrollLeft / (scrollWidth - clientWidth)) * 100;

    indicators.forEach((indicator, index) => {
        if (scrollPercentage >= index * 25 && scrollPercentage < (index + 1) * 25) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

function toggleNav() {
    document.querySelector('.navigation').classList.toggle('hidden');
}