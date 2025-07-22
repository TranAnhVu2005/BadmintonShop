(() => {
    const itemList = [{
            id: 1,
            class: 'racket moreThan3M yonex',
            img: "./assets/images/anhsanpham/vot1.jpg",
            nameItem: "Vợt cầu lông Yonex Nanoflare 700 Pro 2024",
            costItem: "4.309.000"
        },
        {
            id: 2,
            class: 'racket moreThan3M victor',
            img: "./assets/images/anhsanpham/vot2.jpg",
            nameItem: "Vợt Cầu Lông Victor Thruster Ryuga Metallic CPS",
            costItem: "3.950.000"
        },
        {
            id: 3,
            class: 'racket from1MTo2M lining',
            img: "./assets/images/anhsanpham/vot3.jpg",
            nameItem: "Vợt cầu lông Lining Halbertec 3000",
            costItem: "1.390.000"
        },
        {
            id: 4,
            class: 'racket moreThan3M mizuno',
            img: "./assets/images/anhsanpham/vot4.jpg",
            nameItem: "Vợt cầu lông Mizuno Fortius 11 Quick",
            costItem: "4.289.000"
        },
        {
            id: 5,
            class: 'racket from500To1M vnb',
            img: "./assets/images/anhsanpham/vot5.jpg",
            nameItem: "Vợt cầu lông VNB V200 Xanh chính hãng",
            costItem: "529.000"
        },
        {
            id: 6,
            class: 'shoes from1MTo2M yonex',
            img: "./assets/images/anhsanpham/giay1.jpg",
            nameItem: "Giày cầu lông Yonex SHB 65X4 2025",
            costItem: "1.809.000"
        },
        {
            id: 7,
            class: 'shoes from1MTo2M victor',
            img: "./assets/images/anhsanpham/giay2.jpg",
            nameItem: "Giày cầu lông Victor P-UTM A",
            costItem: "1.800.000"
        },
        {
            id: 8,
            class: 'shoes from1MTo2M lining',
            img: "./assets/images/anhsanpham/giay3.jpg",
            nameItem: "Giày cầu lông Lining AYTU025-1 chính hãng",
            costItem: "1.325.000"
        },
        {
            id: 9,
            class: 'shoes from1MTo2M victor',
            img: "./assets/images/anhsanpham/giay4.jpg",
            nameItem: "Giày cầu lông Victor Doraemon P-DRM A",
            costItem: "1.850.000"
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
            id: 12,
            class: 'shirt lessThan500 victor',
            img: "./assets/images/anhsanpham/ao2.jpg",
            nameItem: "Áo cầu lông Victor 2115 Nam - Trắng xanh",
            costItem: "160.000"
        },
        {
            id: 13,
            class: 'shirt lessThan500 lining',
            img: "./assets/images/anhsanpham/ao3.jpg",
            nameItem: "Áo cầu lông Lining 25005 nam - Đen",
            costItem: "160.000"
        },

        {
            id: 14,
            class: 'shirt lessThan500 lining',
            img: "./assets/images/anhsanpham/ao4.jpg",
            nameItem: "Áo cầu lông Lining 25001 nữ - Tím hồng",
            costItem: "160.000"
        },
        {
            id: 15,
            class: 'shirt lessThan500 yonex',
            img: "./assets/images/anhsanpham/ao5.jpg",
            nameItem: "Áo cầu lông Yonex TRM2883 chính hãng",
            costItem: "189.000"
        },

        {
            id: 16,
            class: 'dress from500To1M yonex',
            img: "./assets/images/anhsanpham/vay1.jpg",
            nameItem: "Váy cầu lông Yonex 26118EX - Đen chính hãng",
            costItem: "500.000"
        },
        {
            id: 17,
            class: 'dress lessThan500 yonex',
            img: "./assets/images/anhsanpham/vay2.jpg",
            nameItem: "Váy cầu lông Yonex 062 - Đỏ",
            costItem: "150.000"
        },
        {
            id: 18,
            class: 'dress lessThan500 lining',
            img: "./assets/images/anhsanpham/vay3.jpg",
            nameItem: "Váy cầu lông Lining 035 - Trắng",
            costItem: "150.000"
        },
        {
            id: 19,
            class: 'dress lessThan500 victor',
            img: "./assets/images/anhsanpham/vay4.jpg",
            nameItem: "Váy cầu lông Victor 7053 - Trắng đen",
            costItem: "150.000"
        },
        {
            id: 20,
            class: 'dress lessThan500 victor',
            img: "./assets/images/anhsanpham/vay5.jpg",
            nameItem: "Váy cầu lông Victor 7053 - Đen trắng",
            costItem: "150.000"
        },

        {
            id: 21,
            class: 'trouser lessThan500 yonex',
            img: "./assets/images/anhsanpham/quan1.jpg",
            nameItem: "Quần cầu lông Yonex TSM2910 chính hãng",
            costItem: "149.000"
        },

        {
            id: 22,
            class: 'trouser lessThan500 victor',
            img: "./assets/images/anhsanpham/quan2.jpg",
            nameItem: "Quần cầu lông Victor 628 - Xanh biển",
            costItem: "130.000"
        },


        {
            id: 23,
            class: 'trouser lessThan500 lining',
            img: "./assets/images/anhsanpham/quan3.jpg",
            nameItem: "Quần cầu lông Lining 967 - Trắng",
            costItem: "130.000"
        },


        {
            id: 24,
            class: 'trouser lessThan500 lining',
            img: "./assets/images/anhsanpham/quan4.jpg",
            nameItem: "Quần cầu lông Lining 92009 - Xanh ngọc",
            costItem: "130.000"
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
        const nav = document.querySelector('.page-header-navbar');
        const toggles = nav.querySelectorAll('.read-more');
        const originals = Array.from(nav.querySelectorAll('a.navbar-link')).slice(0, 7);
        const searchForms = document.querySelectorAll('.search');

        let dropdown = null;
        const clones = [];

        function initDropdown() {
            dropdown = document.createElement('div');
            dropdown.className = 'dropdown-links';

            originals.forEach(orig => {
                const c = orig.cloneNode(true);
                c.style.display = 'none';
                dropdown.appendChild(c);
                clones.push(c);
            });

            dropdown.addEventListener('click', e => e.stopPropagation());
            nav.appendChild(dropdown);
        }

        function updateDropdown() {
            originals.forEach((orig, i) => {
                const isHidden = window.getComputedStyle(orig).display === 'none';
                clones[i].style.display = isHidden ? 'block' : 'none';
            });
        }

        function toggleHandler(e) {
            e.stopPropagation();
            if (!dropdown) initDropdown();
            updateDropdown();
            dropdown.classList.toggle('open');
        }

        toggles.forEach(btn => btn.addEventListener('click', toggleHandler));

        //click ra ngoài
        document.addEventListener('click', e => {
            // Đóng dropdown nếu đang mở
            if (dropdown && dropdown.classList.contains('open')) {
                dropdown.classList.remove('open');
            }

            // Đóng kết quả tìm kiếm nếu click ngoài
            searchForms.forEach(form => {
                if (!form.contains(e.target)) {
                    const results = form.querySelector('.search-results');
                    if (results) results.remove();
                }
            });
        });

        // Xử lý tìm kiếm
        searchForms.forEach(form => {
            const input = form.querySelector('.search-input');

            form.addEventListener('submit', e => {
                e.preventDefault();
                const query = input.value.trim().toLowerCase();
                const prevResults = form.querySelector('.search-results');
                if (prevResults) prevResults.remove();

                if (!query) return;

                const matches = itemList.filter(item =>
                    item.nameItem.toLowerCase().includes(query)
                );

                const resultsContainer = document.createElement('div');
                resultsContainer.className = 'search-results';

                const ul = document.createElement('ul');

                if (matches.length === 0) {
                    const li = document.createElement('li');
                    li.textContent = 'Không tìm thấy sản phẩm nào';
                    ul.appendChild(li);
                } else {
                    matches.forEach(item => {
                        const li = document.createElement('li');
                        li.textContent = `${item.nameItem} ~ ${item.costItem}`;
                        li.addEventListener('click', () => {
                            window.location.href = `chitietsanpham.html?id=${item.id}`;
                        });
                        ul.appendChild(li);
                    });
                }

                resultsContainer.appendChild(ul);
                form.appendChild(resultsContainer);
            });
        });
    });
})();