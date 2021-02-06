const gallery = document.getElementById('gallery');

const onLoad = async () => {
    const data = await fetch('index.json').then(resp => resp.json());
    for (let i in data) {
        const n   = parseInt(i) + 1;
        const num = n.toString().padStart(3, '0');

        const think = document.createElement('div');
        think.className = "think";

        const number = document.createElement('div');
        number.className = "number";
        number.innerHTML = `${num}`;

        const text = document.createElement('div');
        text.className = "text";
        text.innerHTML = data[i].text;

        think.appendChild(number);
        think.appendChild(text);
        gallery.appendChild(think);
    }
};

window.onload = onLoad;
