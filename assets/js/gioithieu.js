/*----------------hieu ung luot trang animaion-----*/
const slideElements = document.querySelectorAll('.slide-in');

function checkVisible() {
  slideElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      el.classList.add('active');
    }
  });
}

window.addEventListener('scroll', checkVisible);
checkVisible(); // chạy lần đầu khi load


/* hiệu ứng ảnh đầu trang --------------------------------------------*/

document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.image-slider');
    const allImages = document.querySelectorAll('.image-slider img');

    const numClones = 2; 
    const totalImagesInDOM = allImages.length; 
    const realImagesCount = totalImagesInDOM - (numClones * 2); // Số lượng ảnh thật sự

    let currentIndex = numClones; 
    const slideInterval = 3000; // Thời gian tự động chuyển ảnh (3 giây)
    let autoSlideTimer; 

    // Kiểm tra nếu không có đủ ảnh thật để chạy slider vòng lặp
    if (realImagesCount <= 0) {
        console.log("Không đủ ảnh thật để tạo hiệu ứng vòng lặp vô hạn.");
        return; 
    }

    // Hàm cập nhật vị trí của slider và kiểm soát transition
    function updateSliderPosition(smoothTransition = true) {
        const slideWidth = allImages[0].clientWidth; 

        // Bật/tắt transition:
        // - true: có chuyển động mượt mà (khi slide bình thường)
        // - false: không có transition (khi "nhảy" vị trí tức thì)
        slider.style.transition = smoothTransition ? 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none';
        
        slider.style.transform = 'translateX(' + (-currentIndex * slideWidth) + 'px)';

     
        if (smoothTransition) {
            slider.addEventListener('transitionend', handleTransitionEnd, { once: true });
        } else {
         
            handleTransitionEnd();
        }
    }


    function handleTransitionEnd() {
   
        if (currentIndex >= realImagesCount + numClones) {
      
            currentIndex = numClones; 
            updateSliderPosition(false);
        } 
        // Nếu đã trượt tới ảnh ảo CUỐI CÙNG ở đầu (trước ảnh thật đầu tiên)
        else if (currentIndex < numClones) {
         
            currentIndex = realImagesCount + (numClones - 1); 
            updateSliderPosition(false);
        }
    }

    // Hàm chuyển đến ảnh tiếp theo
    function nextSlide() {
        currentIndex++;
        updateSliderPosition();
    }

    updateSliderPosition(false); 
    
    if (realImagesCount > 1) { 
        autoSlideTimer = setInterval(nextSlide, slideInterval);
    }

    window.addEventListener('resize', function() {
        updateSliderPosition(false);
    });
});