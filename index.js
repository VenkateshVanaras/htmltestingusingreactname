

function test2(value){
    if (value === "Hello World!") {
        return "Hello Ratan TATa"
    } else{
        return "Hello World!"
    }
}

function test() { 
    const element = document.getElementById("root");
    const headElement = document.getElementById("head");
    //const text = headElement.textContent === "Hello World!";
    const value = headElement.textContent === "Hello World!" ? "Hello Ratan TATa" : "Hello World!" ; 
    headElement.textContent = value;
    //headElement.textContent =  test2(text);
    console.log("button clicked");
}
