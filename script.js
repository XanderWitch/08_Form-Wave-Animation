
//will give us a node list of all the labels
const label = document.querySelectorAll('.form-control label');

label.forEach(label => {
    label.innerHTML = label.innerText
        .split('') //split letters into an array
        //transition delay adds the wave effect
        .map((letter, idx) => `<span style="transition-delay: ${idx * 50}ms">${letter}</span>`) //turn into an array of letters with a span around each with a transition delay
        .join('') //turn it back into a string
})