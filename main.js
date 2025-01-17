// -------------------------네브영역--------------------------------------
const menuButton = document.getElementById('menu-button');
const menuItems = document.querySelector('.reaction-type-menu-item');

// 버튼 클릭 이벤트 리스너 추가
menuButton.addEventListener('click', () => {
  // 클래스 토글로 display 상태 전환
  menuItems.classList.toggle('active');
});
// -------------------------네브영역--------------------------------------