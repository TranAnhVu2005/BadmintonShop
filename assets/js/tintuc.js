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
        },
        {
            id: 5,
            title: 'Trải nghiệm sự độc đáo tại sân cầu lông D-Ruby Badminton với thảm sân màu hồng',
            description: 'Tân Phú là khu vực đang có phong trào cầu lông mạnh mẽ, không chỉ dừng lại ở việc mở thêm nhiều sân ...',
            date: '2025-07-8',
            image: './assets/images/anhtintuc/tintuc5.webp'
        },
        {
            id: 6,
            title: 'Khai trương cửa hàng thể thao VNB Cẩm Lệ Đà Nẵng - Chờ đón anh em lông thủ là vô vàn ưu đãi',
            description: 'Nhằm tiếp tục mang đến cho các anh chị em đam mê thể thao một nơi mua sắm đẳng cấp và uy tín tại khu...',
            date: '2025-07-7',
            image: './assets/images/anhtintuc/tintuc6.webp'
        },
        {
            id: 7,
            title: 'Khai Trương Cửa hàng thể thao VNB Tân Bình CN 2 - Với không gian mua sắm hiện đại',
            description: 'Cửa hàng thể thao VNB Tân Bình CN2 không chỉ là nơi bạn có thể tìm thấy những sản phẩm cầu lông chín...',
            date: '2025-07-6',
            image: './assets/images/anhtintuc/tintuc7.webp'
        },
        {
            id: 8,
            title: 'Review sân cầu lông HAAN BADMINTON CLUB uy tín và chất lượng tại quận Bình Tân, TP.HCM',
            description: 'Sân cầu lông HAAN BADMINTON CLUB với không gian rộng rãi, cơ sở vật chất sạch đẹp, được biết đến là ...',
            date: '2025-07-5',
            image: './assets/images/anhtintuc/tintuc8.webp'
        },
        {
            id: 9,
            title: 'Tưng bừng khai trương cửa hàng thể thao VNB Tân Uyên - Với chương trình Mega sale hấp dẫn',
            description: 'Nhằm mang đến những sản phẩm và dịch vụ chất lượng nhất cho cộng đồng người yêu thể thao tại TP. Tân...',
            date: '2025-07-2',
            image: './assets/images/anhtintuc/tintuc9.webp'
        },
        {
            id: 10,
            title: 'Khám phá sân cầu lông Hoàng Vy chất lượng đáng để trải nghiệm tại quận 8, TP.HCM',
            description: 'Sân cầu lông Hoàng Vy với mặt sân đẹp, các dịch vụ tiện ích đầy đủ và được biết đến là một trong nhữ...',
            date: '2025-07-1',
            image: './assets/images/anhtintuc/tintuc10.webp'
        },
        {
            id: 11,
            title: 'Tưng bừng khai trương cửa hàng thể thao VNB Tây Hồ - Với nhiều chương trình ưu đãi hấp dẫn',
            description: 'VNB Sports sẽ mang đến một chi nhánh mới tại Hà Nội với Cửa hàng thể thao VNB Tây Hồ. ShopVNB Tây Hồ...',
            date: '2025-06-29',
            image: './assets/images/anhtintuc/tintuc11.webp'
        },
        {
            id: 12,
            title: 'Review sân cầu lông & Pickleball Phú Quốc Dynamics Center chất lượng và quy mô lớn tại TP. Phú Quốc, tỉnh Kiên Giang',
            description: 'Sân cầu lông & Pickleball Phú Quốc Dynamics Center được nhiều người biết đến bởi không gian rộng rãi...',
            date: '2025-06-27',
            image: './assets/images/anhtintuc/tintuc12.webp'
        },
        {
            id: 13,
            title: 'Khám phá sân cầu lông & Pickleball Tô Ký đẹp, chất lượng và uy tín tại huyện Hóc Môn, TP.HCM',
            description: 'Sân cầu lông & Pickleball Tô Ký với không gian rộng rãi, thoáng mát, được biết đến là một trong nhữn...',
            date: '2025-06-15',
            image: './assets/images/anhtintuc/tintuc13.webp'
        },
        {
            id: 14,
            title: 'Khai trương cửa hàng thể thao VNB Super Center với nhiều ưu đãi hấp dẫn',
            description: 'Cửa hàng VNB Super Center không chỉ là nơi mua sắm các sản phẩm thể thao từ giá rẻ đến cao cấp, mà c...',
            date: '2025-06-09',
            image: './assets/images/anhtintuc/tintuc14.webp'
        },
        {
            id: 15,
            title: 'Review sân cầu lông Aka Badminton Center đẹp, chất lượng và xịn xò tại quận Bình Tân, TP.HCM',
            description: 'Sân cầu lông Aka Badminton Center nổi tiếng trong khoảng thời gian gần đây bởi không gian thoáng đãn...',
            date: '2025-06-08',
            image: './assets/images/anhtintuc/tintuc15.webp'
        },
        {
            id: 16,
            title: 'Review sân cầu lông Loca Badminton Club chi tiết nhất',
            description: 'Nếu bạn đang ở Gò Vấp đang tìm một sân cầu lông để giải trí, tập luyện và thi đấu thì shop VNB xin g...',
            date: '2025-06-04',
            image: './assets/images/anhtintuc/tintuc16.webp'
        },
        {
            id: 17,
            title: 'Tìm hiểu về giày Lightning và những thương hiệu giày cầu lông hàng đầu trên thị trường',
            description: 'Lining là một thương hiệu thể thao nổi tiếng, đặc biệt trong lĩnh vực cầu lông, với những sản phẩm đ...',
            date: '2025-06-02',
            image: './assets/images/anhtintuc/tintuc17.webp'
        },
    ];

    let filtered = [...newsData];
    let currentPage = 1;

    function getCols() {
        const w = window.innerWidth;
        if (w >= 1024) return 3;
        if (w >= 768) return 2;
        return 1;
    }

    function getPerPage() {
        return getCols() * 4;
    }

    function renderNews() {
        const grid = document.querySelector('.news-content');
        if (!grid) return;

        const perPage = getPerPage();
        const start = (currentPage - 1) * perPage;
        const pageItems = filtered.slice(start, start + perPage);

        if (pageItems.length === 0) {
            grid.innerHTML = `<p>Không tìm thấy tin tức nào 😢</p>`;
            renderPagination(1);
            return;
        }

        grid.innerHTML = pageItems.map(item => `
      <div class="news-item" onclick="location.href='chitiettintuc.html?id=${item.id}'">
        <img src="${item.image}" alt="${item.title}" />
        <h4>${item.title}</h4>
        <p>${item.description}</p>
        <span class="date">${item.date}</span>
      </div>
    `).join('');

        renderPagination(Math.ceil(filtered.length / perPage));
    }

    function renderPagination(totalPages) {
        const list = document.querySelector('.page-list');
        if (!list) return;

        list.innerHTML = '';
        for (let i = 1; i <= totalPages; i++) {
            const div = document.createElement('div');
            div.textContent = i;
            div.className = 'page-number' + (i === currentPage ? ' active' : '');
            div.onclick = () => {
                currentPage = i;
                renderNews();
            };
            list.appendChild(div);
        }

        const prevBtn = document.querySelector('.prev');
        const nextBtn = document.querySelector('.next');
        if (prevBtn) prevBtn.disabled = currentPage === 1;
        if (nextBtn) nextBtn.disabled = currentPage === totalPages;
    }

    const searchInput = document.getElementById('search-news-input');
    const searchButton = document.getElementById('search-news-button');

    if (searchInput && searchButton) {
        searchButton.onclick = () => {
            const kw = searchInput.value.trim().toLowerCase();
            filtered = kw ? newsData.filter(n => n.title.toLowerCase().includes(kw)) : [...newsData];
            currentPage = 1;
            renderNews();
        };

        searchInput.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                searchButton.click();
            }
        });
    }

    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');

    if (prev) {
        prev.onclick = () => {
            if (currentPage > 1) {
                currentPage--;
                renderNews();
            }
        };
    }

    if (next) {
        next.onclick = () => {
            const perPage = getPerPage();
            const totalPages = Math.ceil(filtered.length / perPage);
            if (currentPage < totalPages) {
                currentPage++;
                renderNews();
            }
        };
    }

    function debounce(fn, delay) {
        let timer;
        return () => {
            clearTimeout(timer);
            timer = setTimeout(fn, delay);
        };
    }

    window.addEventListener('resize', debounce(renderNews, 150));

    renderNews();
})();