// script.js
document.addEventListener("DOMContentLoaded", function() {
    const introAnimation = document.getElementById("intro-animation");
    const iframeSection = document.querySelector('.iframe-section');

    setTimeout(() => {
        introAnimation.classList.add("hidden");
        iframeSection.style.display = 'block'; // 显示 iframe
        // 不要设置 window.scrollTo() 或其他滚动逻辑
    }, 3000); // 3秒后隐藏
});
