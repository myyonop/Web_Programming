//날싸-시간 표시
function updateClock() {
    const now = new Date();
    // 날짜
    const date = now.toLocaleDateString(); 
    // 시간
    const time = now.toLocaleTimeString(); 
    
    document.getElementById("time").innerText = `${date} ${time}`;
}
// 1초마다 업데이트
setInterval(updateClock, 1000); 
setInterval(updateClock, 1000); 



//배경색 변경
function pink() {
    const gradientSection = document.getElementById('gradientSection');
    gradientSection.style.opacity = 1; // 서서히 그라데이션이 나타남
    gradientSection.style.background = 'linear-gradient(to top, pink, rgba(255, 182, 193, 0))'; // Pink 색상으로 그라데이션 변경
}

function lightblue() {
    const gradientSection = document.getElementById('gradientSection');
    gradientSection.style.opacity = 1; // 서서히 그라데이션이 나타남
    gradientSection.style.background = 'linear-gradient(to top, lightblue, rgba(173, 216, 230, 0))'; // LightBlue 색상으로 그라데이션 변경
}

function lightyellow() {
    const gradientSection = document.getElementById('gradientSection');
    gradientSection.style.opacity = 1; // 서서히 그라데이션이 나타남
    gradientSection.style.background = 'linear-gradient(to top, lightyellow, rgba(255, 255, 224, 0))'; // LightYellow 색상으로 그라데이션 변경
}

function reset() {
    const gradientSection = document.getElementById('gradientSection');
    gradientSection.style.opacity = 0; // 그라데이션을 숨김
}

//이미지 팝업 및 내용 설명
function showContent(type) {
    const data = {
        html: { img: "img/html.png", text: "<b>HTML</b>은 구조적 웹문서를 작성하는데 사용하는 마크업 언어이다." },
        css: { img: "img/css.png", text: "<b>CSS</b>는 스타일을 적용하는데 사용하는 언어이다." },
        js: { img: "img/js.png", text: "<b>JavaScript</b>는 동적인 웹을 만들기 위한 프로그래밍 언어이다." }
    };

    if (!data[type]) return;

    const container = document.getElementById('desc-container');
    container.style.opacity = '0'; // 먼저 숨기기

    setTimeout(() => { // 0.2초 후 내용 변경 후 다시 보이게
        document.getElementById('fig').src = data[type].img;
        document.getElementById('desc').innerHTML = `<p>${data[type].text}</p>`;
        container.style.opacity = '1';
    }, 200);
}

function hide() {
    document.getElementById('desc-container').style.opacity = '0'; // 마우스를 떼면 사라지게
}