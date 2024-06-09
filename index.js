document.addEventListener('DOMContentLoaded', function() {
  // Số lượng quà ban đầu
  const totalPresents = 5;
  let openedPresents = 0;

  // Đường dẫn đến các hình ảnh quà đã mở
  const openedImages = [
      './image/vouchers.png',
      './image/duck.jpg',
      './image/vouchers.png',
      './image/duck.jpg',
      './image/vouchers.png'
  ];

  // Lấy các phần tử và biến từ DOM
  const title = document.getElementById('title');
  const presentsDiv = document.getElementById('presents');

  // Hàm tạo các hộp quà
  function createPresents() {
      for (let i = 0; i < totalPresents; i++) {
          const present = document.createElement('img');
          present.src = './image/prs.png'; // Đường dẫn đến hình ảnh của quà chưa mở
          present.alt = 'Present';
          present.classList.add('present');
          present.dataset.index = i; // Lưu trữ chỉ mục của món quà
          present.addEventListener('click', openPresent);
          presentsDiv.appendChild(present);
      }
  }

  // Hàm xử lý khi mở quà
  function openPresent(event) {
      const index = event.target.dataset.index; // Lấy chỉ mục của món quà
      event.target.src = openedImages[index]; // Đặt hình ảnh đã mở tương ứng
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
