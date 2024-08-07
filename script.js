const getcolor = () => {
    //hex code

    const random_num = Math.floor(Math.random() * 16777215);
    const code = "#" + random_num.toString(16);
    document.body.style.backgroundColor = code;
    console.log(random_num, code);
    document.getElementById("color_code").innerText = code;

    //clipboard
    navigator.clipboard.writeText(code)
}


//event call
const btn = document.getElementById("btn");
btn.addEventListener("click", getcolor);


//inti call
getcolor();