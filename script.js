// script.js
document.addEventListener('DOMContentLoaded', function() {
    const introAnimation = document.getElementById('intro-animation');
    const mainContent = document.getElementById('main-content');

    // 设置动画结束的回调
    introAnimation.addEventListener('animationend', function() {
        introAnimation.style.display = 'none'; // 隐藏开场动画
        mainContent.style.display = 'block'; // 显示主内容
    });
});
