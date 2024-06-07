document.addEventListener('DOMContentLoaded', function() {
  // Số lượng quà ban đầu
  const totalPresents = 5;
  let openedPresents = 0;

  // Lấy các phần tử từ DOM
  const title = document.getElementById('title');
  const presentsDiv = document.getElementById('presents');

  // Hàm tạo các hộp quà
  function createPresents() {
      for (let i = 0; i < totalPresents; i++) {
          const present = document.createElement('img');
          present.src = './image/prs.png'; // Đường dẫn đến hình ảnh của quà
          present.alt = 'Present';
          present.classList.add('present');
          present.addEventListener('click', openPresent);
          presentsDiv.appendChild(present);
      }
  }

  // Hàm xử lý khi mở quà 
  function openPresent(event) {
      event.target.src = './image/vouchers.png'; // Đường dẫn đến hình ảnh quà đã mở
      event.target.removeEventListener('click', openPresent);
      openedPresents++;
      checkAllPresentsOpened();
  }

  // Kiểm tra xem tất cả các món quà đã được mở chưa
  function checkAllPresentsOpened() {
      if (openedPresents === totalPresents) {
          title.textContent = 'Enjoy your presents!';
      }
  }

  // Gọi hàm tạo quà khi DOM đã sẵn sàng
  createPresents();
});
