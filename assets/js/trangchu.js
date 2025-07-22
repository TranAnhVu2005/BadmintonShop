(() => {
    const newsData = [{
            id: 1,
            title: 'Ưa đãi lớn - Khuyến mãi khủng nhân dịp khai trương Cửa hàng thể thao VNB TP. Vĩnh Long',
            description: 'Nhận thấy sự ủng hộ nhiệt tình của mọi người tại TP. Vĩnh Long, nay ShopVNB chính thức ra mắt một ch...',
            date: '2025-07-14',
            image: './assets/images/anhtintuc/tintuc1.webp'
        },
        {
            id: 2,
            title: 'Khám phá sân CLB cầu lông Như Ý chất lượng đáng trải nghiệm tại quận 8, TP. Hồ Chí Minh',
            description: 'Nếu bạn đang tìm một sân chơi cầu lông tiện nghi và chất lượng tại khu vực Quận 8, TP. Hồ Chí Minh? ...',
            date: '2025-07-12',
            image: './assets/images/anhtintuc/tintuc2.webp'
        },
        {
            id: 3,
            title: 'Hân hoan khai trương Cửa hàng thể thao VNB Thanh Trì với vô vàn khuyến mãi đang chờ đón các bạn',
            description: 'VNB Thanh Trì là chi nhánh tiếp theo tại Hà Nội nhằm phục vụ nhu cầu thể thao đang ngày càng phát tr...',
            date: '2025-07-11',
            image: './assets/images/anhtintuc/tintuc3.webp'
        },
        {
            id: 4,
            title: 'Khám phá sân cầu lông Nguyễn Trọng Quyền uy tín và chất lượng đáng để trải nghiệm nhất tại quận Tân Phú',
            description: 'Bạn đang tìm kiếm một địa chỉ chơi cầu lông uy tín, chất lượng và giá cả phải chăng tại quận Tân Phú...',
            date: '2025-07-10',
            image: './assets/images/anhtintuc/tintuc4.webp'
        }
    ];
    const itemList = [{
            id: 5,
            class: 'racket from500To1M vnb',
            img: "./assets/images/anhsanpham/vot5.jpg",
            nameItem: "Vợt cầu lông VNB V200 Xanh chính hãng",
            costItem: "529.000"
        },

        {
            id: 10,
            class: 'shoes from2MTo3M lining',
            img: "./assets/images/anhsanpham/giay5.jpg",
            nameItem: "Giày cầu lông Lining AYAU007-4",
            costItem: "2.500.000"
        },

        {
            id: 11,
            class: 'shirt lessThan500 yonex',
            img: "./assets/images/anhsanpham/ao1.jpg",
            nameItem: "Áo cầu lông Yonex A293 nam - Trắng",
            costItem: "130.000"
        },
        {
            id: 20,
            class: 'dress lessThan500 victor',
            img: "./assets/images/anhsanpham/vay5.jpg",
            nameItem: "Váy cầu lông Victor 7053 - Đen trắng",
            costItem: "150.000"
        },
        {
            id: 25,
            class: 'trouser lessThan500 yonex',
            img: "./assets/images/anhsanpham/quan5.jpg",
            nameItem: "Quần cầu lông Yonex TSM2911 hính hãng",
            costItem: "149.000"
        },

    ];

    document.addEventListener('DOMContentLoaded', () => {
        // Hàm hiệu ứng tỷ lệ hiển thị theo scroll
        function applyRatioEffect(selector) {
            const elements = document.querySelectorAll(selector);
            if (!elements.length) return;

            const H = window.innerHeight;
            const M = H * 0.05;

            elements.forEach(el => {
                const rct = el.getBoundingClientRect();
                const c = rct.top + rct.height / 2;
                let ratio = c <= M ? c / M : c >= H - M ? (H - c) / M : 1;
                ratio = Math.max(0, Math.min(1, ratio));
                el.style.setProperty('--ratio', ratio);
            });
        }

        //Slider 
        const slides = document.querySelectorAll('.slide');
        const dots = document.querySelectorAll('.dot');
        const prevBtn = document.querySelector('.page-main__slider--prev');
        const nextBtn = document.querySelector('.page-main__slider--next');
        let current = 0;

        if (slides.length && dots.length && prevBtn && nextBtn) {
            let timer = setInterval(nextSlide, 4000);

            function showSlide(index) {
                slides.forEach((slide, i) => {
                    slide.classList.toggle('active', i === index);
                    dots[i].classList.toggle('active', i === index);
                });
            }

            function nextSlide() {
                current = (current + 1) % slides.length;
                showSlide(current);
            }

            function prevSlide() {
                current = (current - 1 + slides.length) % slides.length;
                showSlide(current);
            }

            function resetTimer() {
                clearInterval(timer);
                timer = setInterval(nextSlide, 4000);
            }

            prevBtn.addEventListener('click', () => {
                prevSlide();
                resetTimer();
            });

            nextBtn.addEventListener('click', () => {
                nextSlide();
                resetTimer();
            });

            dots.forEach((dot, i) => {
                dot.addEventListener('click', () => {
                    current = i;
                    showSlide(current);
                    resetTimer();
                });
            });

            showSlide(current);
        }

        // Sản phẩm mới
        const sectionFeatured = document.querySelector('.page-main__content--featured-products');
        if (sectionFeatured) {
            const track = sectionFeatured.querySelector('.slider-track');
            const prev = sectionFeatured.querySelector('.slider-btn.prev');
            const next = sectionFeatured.querySelector('.slider-btn.next');

            if (track && prev && next) {
                const list = itemList.slice(0, 5).concat({
                    id: 'more'
                });
                list.forEach(item => {
                    const box = document.createElement('div');
                    box.className = 'product-item';
                    box.innerHTML = item.id !== 'more' ?
                        `<img src="${item.img}" alt="${item.nameItem}">
                        <h4>${item.nameItem}</h4>
                        <p>${item.costItem} đ</p>` :
                        `<h3>Xem thêm</h3>`;
                    box.addEventListener('click', () => {
                        location.href = item.id === 'more' ?
                            'sanpham.html' : `chitietsanpham.html?id=${item.id}`;
                    });
                    track.appendChild(box);
                });

                let current = 0,
                    visible = 1;

                function updateVisible() {
                    const w = window.innerWidth;
                    visible = w < 768 ? 1 : w < 1024 ? 2 : 4;
                    move();
                }

                function move() {
                    track.style.transform = `translateX(-${current * (100 / visible)}%)`;
                    prev.disabled = current === 0;
                    next.disabled = current >= list.length - visible;
                }

                prev.addEventListener('click', () => {
                    current = Math.max(0, current - 1);
                    move();
                });

                next.addEventListener('click', () => {
                    current = Math.min(list.length - visible, current + 1);
                    move();
                });

                window.addEventListener('resize', updateVisible);
                updateVisible();

                function sliderAnimationLoop() {
                    applyRatioEffect('.product-item');
                    requestAnimationFrame(sliderAnimationLoop);
                }
                sliderAnimationLoop();
            }
        }

        //Latest News
        const sectionNews = document.querySelector('.page-main__content--latest-news');
        if (sectionNews) {
            const wrapper = sectionNews.querySelector('.news-wrapper');
            if (wrapper) {
                newsData.slice(0, 4).forEach(item => {
                    const card = document.createElement('div');
                    card.className = 'news-item';
                    card.innerHTML = `
            <img src="${item.image}" alt="${item.title}" />
            <h4>${item.title}</h4>
            <p>${item.description}</p>
            <span class="date">${item.date}</span>
          `;
                    card.addEventListener('click', () => {
                        location.href = `chitiettintuc.html?id=${item.id}`;
                    });
                    wrapper.appendChild(card);
                });

                function newsEffectLoop() {
                    applyRatioEffect('.news-item');
                    requestAnimationFrame(newsEffectLoop);
                }
                newsEffectLoop();
            }
        }

        // Các hiệu ứng scroll
        applyRatioEffect('.commitment-item');
        applyRatioEffect('.sale-item');
        window.addEventListener('scroll', () => {
            applyRatioEffect('.commitment-item');
            applyRatioEffect('.sale-item');
        });
        window.addEventListener('resize', () => {
            applyRatioEffect('.commitment-item');
            applyRatioEffect('.sale-item');
        });
    });
})();