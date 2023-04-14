const myButton = document.getElementById('myBtn');


window.onscroll = function () {scrollFunction()};

function scrollFunction () {
    if (document.body.scrollTop > 1200 || document.documentElement.scrollTop > 1200) {
        myButton.style.display = "block";
    }
    
    else {
        myButton.style.display = "none";
    }
}

myButton.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

/*-------------------------------------*/



