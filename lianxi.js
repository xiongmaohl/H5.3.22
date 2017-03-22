var body = document.body;
var contant = document.createElement('div')
var input = document.createElement('input')
input.type = 'text'
var button = document.createElement('button')
button.innerText = "点击"
var div = document.createElement('div')
button.onclick = function dianji(){
    var zhi = input.value.trim()
    if(zhi == ''){
        alert('输入不能为空')
    }
    else{
        var h5 = document.createElement('h5')
        h5.innerText = zhi
        div.appendChild(h5)
    }
}
contant.appendChild(input)
contant.appendChild(button)
body.appendChild(contant)
body.appendChild(div)