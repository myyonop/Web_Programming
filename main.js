//날싸-시간 표시
document.getElementById('time').innerHTML = new Date().toLocaleString()


//배경색 변경
function pink() {
    document.body.style.backgroundColor = 'pink'
}

function lightblue() {
    document.body.style.backgroundColor = 'lightblue'
}

function lightyellow() {
    document.body.style.backgroundColor = 'lightyellow'
}

function reset() {
    document.body.style.backgroundColor = 'linen'
}

//이미지 팝업 및 내용 설명
function show_html() {
    document.getElementById('fig').src = 'img/html.png' 
    document.getElementById('desc').innerHTML = '<b>HTML</b>은 구조적 웹문서를 작성하는데 사용하는 마크업 언어이다.'
}
function show_css() {
    document.getElementById('fig').src = 'img/css.png' 
    document.getElementById('desc').innerHTML = '<b>CSS</b>은 구조적 웹문서를 작성하는데 사용하는 마크업 언어이다.'
}
function show_js() {
    document.getElementById('fig').src = 'img/js.png' 
    document.getElementById('desc').innerHTML = '<b>JavaScript</b>은 구조적 웹문서를 작성하는데 사용하는 마크업 언어이다.'
}
function hide() {
    document.getElementById('fig').src = ''
    document.getElementById('desc').innerHTML = ''
}