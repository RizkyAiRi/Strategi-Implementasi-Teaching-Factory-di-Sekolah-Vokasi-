document.addEventListener('DOMContentLoaded', () => {
    const strategyCards = document.querySelectorAll('.card');
    const modal = document.getElementById('strategyModal');
    const closeButton = document.querySelector('.close-button');
    const modalTitle = document.getElementById('modal-title');
    const modalImage = document.getElementById('modal-image');
    const modalText = document.getElementById('modal-text');
    const modalPointsTitle = document.getElementById('modal-points-title');
    const modalPointsList = document.getElementById('modal-points-list');
    const flowSteps = document.querySelectorAll('.proses-card');
    const caseStudyCards = document.querySelectorAll('.case-item');
    const strategyContainer = document.getElementById('strategi-container');
    const strategyDetailPanel = document.getElementById('strategi-detail-panel');

    // Data untuk setiap strategi (bisa diisi lebih detail)
    const strategyData = {
        kemitraan: {
            title: 'Strategi Kemitraan Industri yang Kuat & Saling menguntungkan .',
            image: 'public/kemitraan.jpg', // Ganti dengan gambar relevan
            text: 'Fondasi utama Teaching Factory (TEFA) adalah hubungan mutualisme dengan Dunia Usaha dan Dunia Industri (DUDI). Kemitraan ini bukan sekedar formalitas, melainkan jembatan hidup yang memastikan kurikulum tetap relevan, teknologi yang digunakan tidak usang, dan lulusan memiliki standar kompetensi yang diakui. Kemitraan yang sukses melampaui program magang; ini mencakup pelibatan industri dalam pengajaran, pengembangan produk bersama, dan upskilling guru.',
            pointsTitle: 'Bentuk Kemitraan Strategis',
            points: [
                '<strong>Penyelarasan Kurikulum Bersama:</strong> Industri memberikan masukan langsung untuk memastikan kurikulum (silabus, modul) sesuai dengan kebutuhan pasar kerja.',
                '<strong>Program Guru Tamu & Ahli:</strong> Mendatangkan praktisi industri secara rutin untuk mengajar dan berbagi studi kasus nyata.',
                '<strong>Magang Guru (Upskilling):</strong> Mengirim guru ke industri untuk memperbarui pengetahuan teknis dan manajerial mereka.',
                '<strong>Program Magang Siswa Terstruktur:</strong> Bukan hanya menempatkan, tetapi merancang program magang yang terukur dan berbasis proyek.',
                '<strong>Hibah Peralatan & Teknoligi:</strong> Transfe teknologi atau donasi peralatan dari industri ke sekolah untuk memastikan relevansi.',
                '<strong>Sertifikasi Kompetendi:</strong> Industri menjadi mittra dalam pengujian dan sertifikasi kompetensi siswa.'
                
            ]
        },
        kurikulum: {
            title: 'Penyelarasan Kurikulum yang Adaptid % Berbasis Proyek (PJBL)',
            image: 'public/kurikulum.jpg', // Ganti dengan gambar relevan
            text: 'Kurikulum TEFA harus bersifat "link and match" secara nyata, bukan hanya di atas kertas. Strategi ini berfokus pada pergeseran dari pembelajaran berbasis teori (theory-based) menjadi pembelajaran berbasis proyek (Project-Based Learning - PjBL) atau produksi (Production-Based Learning). Siswa belajar dengan mengerjakan "pesanan" atau proyek nyata yang memiliki standar kualitas dan tenggat waktu, sama seperti di industri.',
            pointsTitle: 'Aspek Kunci Penyelarasan Kurikulum:',
            points: [
                '<strong>Mengadopsi SKKNI:</strong> Menggunakan Standar Kompetensi Kerja Nasional sebagai acuan utama kompetensi.',
                '<strong>Integrasi PJBL:</strong> Menjadikan proyek nyata sebagai "tulang punggung" proses pembelajaran, di nama teori diajarkan untuk mendukung penyelesaian proyek.',
                '<strong>Struktur Kurikulum Fleksibel (Blok):</strong> Mengatur jadwal secara fleksibel (misal: sistem blok) untuk memungkinkan penyelesaian proyek yang butuh waktu intensif.',
                '<strong>Penilaian Autentik:</strong> Menilai siswa berdasarkan kinerja, kualitas penduduk/jasa, dan portofolio proyek, bukan hanya ujian tertulis.',
                '<strong>Integrasi Soft Skills:</strong> Menanamkan kemampuan komuniakasi, kerjasama tim (teamwork), pemecahan masalah (problem solving), dan disiplin kerja dalam setiap proyek'
            ]
        },
        sdm: {
            title: 'Pengembangan SDM Guru & Instruktur Berstandar Industri',
            image: 'public/sdm-tefa.jpg', // Ganti dengan gambar relevan
            text: 'TEFA tidak akan berjalan tanpa "nahkoda" yang kompeten. Guru dan instruktur adalah motor penggerak TEFA. Mereka tidak hanya harus menguasai pedagogi (cara mengajar), tetapi juga harus memiliki kompetendi teknis yang setara dengan praktisi industri. Strategi ini berfokus pada penigkatan berkelanjutan SDM sekolah.',
            pointsTitle: 'Program Pengembangan SDM:',
            points: [
                '<strong>Magang Industri untuk Guru:</strong> Program wajib bagi guru untuk "mencelupkan diri" di lingkungan industri secara berkala.',
                '<storng>Sertifikasi Teknis:</strong> Mendorong guru untuk mengambil sertifikasi keahlian yang diakui industri (misal: dari BNSP atau lembaga sertifikasi internasional).',
                '<strong>Pelatihan Metodologi TEFA/PjBL:</strong> Melatih guru cara mengelola kelas berbasis proyek, memfasilitasi, dan menilai pembelajaran berbasis produksi.',
                '<strong>Merekrut Praktisi Industri:</strong> Membuka kesempatan bagi profesional industri untuk menjadi instruktur atau guru paruh waktu.',
                '<strong>Komunitas Belajar (PLC):</strong> Membentuk kelompok diskusi antar guru untuk berbagi praktik terbaik dalam implementasi TEFA.'
            ]
        },
        infrastruktur: {
            title: 'Penyediaan Infrastruktur & Peralatan Standar Industri',
            image: 'public/infrastruktur.jpg', // Ganti dengan gambar relevan
            text: 'Lingkungan belajar harus mencerminkan lingkungan kerja. Siswa tidak bisa diharapkan siap kerja jika mereka berlatih menggunakan peralatan yang sudah usang atau tidak relevan. Strategi ini berfokus pada penyediaan fasilitas, mesin, dan tata letak (layout) bengkel/lab yang menyerupai standar industri, termasuk penerapan budaya K3 (Keselamatan dan Kesehatan Kerja).',
            pointsTitle: 'Fokus Utama Infrastruktur:',
            points: [
                '<strong>Peralatan Mutakhir:</strong> Memastikan mesin dan perangkat lunak yang digunakan relevan dengan yang dipakai industri saat ini.',
                '<strong>Tata Letak (Layout) Efisien:</strong> Mendesain bengkel/lab menyerupai alur kerja industri (misal: alur bahan baku, proses, barang jadi).',
                '<strong>Penerapan K3 (5R):</strong> Membudayakan Keselamatan & Kesehatan Kerja (Penggunaan APD, rambu-rambu) dan 5R (Ringkas, Rapi, Resik, Rawat, Rajin).',
                '<strong>Manajemen Perawatan (Maintenance):</strong> Memiliki jadwal dan prosedur yang jelas untuk perawatan dan perbaikan alat.',
                '<strong>Manajemen Bahan Baku:</strong> Sistem untuk mengelola stok bahan baku dan komponen untuk produksi.'
            ]
        },
        pemasaran: {
            title: 'Manajemen Bisnis & Pemasaran Hasil Prodkusi TEFA',
            image: 'public/pemasaran.jpg', // Ganti dengan gambar relevan
            text: 'Inilah yang membedakan TEFA dari praktik biasa. TEFA menghasilkan produk atau jasa yang "nyata" dan memiliki nilai jual. Untuk itu, TEFA harus dikelola seperti unit bisnis (Business Unit) yang mandiri di dalam sekolah. Ini melatih siswa tidak hanya menjadi pekerja, tetapi juga memahami alur bisnis dari A sampai Z.',
            pointsTitle: 'Aspek Manajemen Bisnis TEFA:',
            points: [
                '<strong>Pembentukan Unit Produksi/Jasa:</strong> Membentuk tim manajemen TEFA yang bertanggung jawab atas operasional bisnis.',
                '<strong>Kontrol Kualitas (QC):</strong> Membangun sistem untuk memastikan setiap produk/jasa yang keluar memenuhi standar kualitas yang ditetapkan.',
                '<strong>Penghitungan Harga Pokok Produksi (HPP):</strong> Mengajarkan siswa cara menghitung biaya produksi dan menentukan harga jual yang kompetitif.',
                '<strong>Strategi Branding & Pemasaran:</strong> Memasarkan produk/jasa (misal: melalui media sosial, e-commerce, atau kemitraan) untuk mendapatkan "pesanan" nyata.',
                '<strong>Pengelolaan Keuangan:</strong> Mengelola arus kas, keuntungan, dan investasi kembali untuk keberlanjutan unit TEFA.'
            ]
        }
    };

    const processData = {
        perencanaan: {
            title: '1. Perencanaan (Analisis Pesanan & Desain)',
            text: 'Setiap proyek TEFA dimulai seperti di industri nyata: menerima pesanan (job order) atau menganalisis kebutuhan pasar. Pada tahap ini, siswa belajar menerjemahkan permintaan pelanggan menjadi rencana kerja yang teknis, rinci, dan terukur. Ini adalah fondasi dari seluruh proses produksi.',
            pointsTitle: 'Aktivitas & Tahap Perencanaan',
            points: [
                'Menerima dan menganalisis pesanan (job order) dari pelanggan (internal/eksternal).',
                'Membuat gambar kerja/desain teknis produk atau merancang alur jasa.',
                'Menghitung kebutuhan bahan baku dan komponen.',
                'Menyusun Rencana Anggaran Biaya (RAB) dan menentukan estimasi HPP.',
                'Membuat jadwal kerja (timeline) dan membagi tugas tim.'
            ]
        },
        pelaksanaan: {
            title: '2. Pelaksanaan (Produksi/Penyediaan Jasa)',
            text: 'Ini adalah inti dari "learning by doing". Siswa secara langsung mengerjakan proyek, memproduksi barang, atau menyediakan jasa sesuai dengan rencana dan SOP (Standard Operating Procedure) yang telah dibuat. Guru berperan sebagai fasilitator dan supervisor, memastikan proses berjalan sesuai standar industri.',
            pointsTitle: 'Aktivitas di Tahap Pelaksanaan:',
            points: [
                'Mempersiapkan alat, mesin, dan bahan baku.',
                'Melaksanakan proses produksi/jasa sesuai SOP dan gambar kerja.',
                'Menerapkan standar K3 (Keselamatan dan Kesehatan Kerja) secara ketat.',
                'Bekerja dalam tim dan berkoordinasi antar bagian.',
                'Mendokumentasikan proses kerja dan mencatat setiap kendala.'
            ]
        },
        evaluasi: {
            title: '3. Evaluasi (Kontrol Kualitas/Quality Control)',
            text: 'Setelah produk/jasa dihasilkan, dilakukan evaluasi menyeluruh. Ini mencakup evaluasi kualitas produk, efisiensi proses, kepuasan pelanggan, dan kinerja tim. Hasil evaluasi digunakan untuk mengidentifikasi area perbaikan dan merumuskan strategi peningkatan berkesinambungan.',
            pointsTitle: 'Aktivitas di Tahap Evaluasi:',
            points: [
                'Melakukan inspeksi dan pengukuran produk jadi.',
                'Menguji fungsionalitas produk atau kualitas layanan.',
                'Membandingkan hasil akhir dengan spesifikasi pesanan (job order).',
                'Mengidentifikasi produk cacat (reject) dan menganalisis penyebabnya (root cause).',
                'Melakukan perbaikan (rework) jika diperlukan.'
            ]
        },
        pemasaran: {
            title: '4. Penyerahan & Pemasaran (Serah Terima/Bisnis)',
            text: 'Proses TEFA berakhir ketika produk/jasa sampai ke tangan pelanggan dan memberikan kepuasan. Tahap ini mencakup proses pengemasan yang aman, pengiriman tepat waktu, dan administrasi. Bagi produk yang dijual umum, ini juga mencakup aktivitas pemasaran, penjualan, dan layanan purna jual.',
            pointsTitle: 'Aktivitas di Tahap Pemasaran:',
            points: [
                'Melakukan pengemasan (packaging) yang standar dan aman.',
                'Menyerahkan produk/jasa kepada pelanggan.',
                'Mengurus administrasi (invoice, surat jalan, laporan proyek).',
                'Menerima umpan balik (feedback) dari pelanggan untuk perbaikan.',
                '(Jika dijual) Mengelola penjualan, promosi, dan layanan purna jual'
            ]
        }
    };

    const caseStudyData = {
    salatiga: {
        title: 'Studi Kasus: SMKN 2 Salatiga',
        //image: 'images/studi-kasus-salatiga.jpg', // Ganti dengan path gambar Anda
        text: 'Dikenal sebagai rujukan nasional, TEFA SMKN 2 Salatiga berfokus pada manufaktur dan otomasi. Mereka tidak hanya simulasi, tapi memproduksi barang jadi bernilai tinggi, seperti perangkat latih (trainer kit) standar industri dan komponen mesin presisi untuk mitra industri mereka.',
        pointsTitle: 'Kunci Keberhasilan Implementasi:',
        points: [
            '<strong>Produksi Nyata:</strong> Siswa secara aktif memproduksi <strong>Trainer Kit</strong> Mekatronika & Pneumatik yang dipesan oleh SMK lain di seluruh Indonesia.',
            '<strong>Kemitraan Mendalam:</strong> Kolaborasi strategis dengan PT Dtech Engineering dan Festo untuk produksi komponen presisi dan standarisasi alat latih.',
            '<strong>Standarisasi Industri:</strong> Menerapkan sistem manajemen mutu ISO 9001 dalam alur produksi TEFA untuk menjamin kualitas produk.',
            '<strong>Pemasaran Aktif:</strong> Memiliki unit bisnis yang aktif memasarkan produk hasil TEFA, memberikan siswa pengalaman bisnis nyata.'
        ]
    },
    cimahi: {
        title: 'Studi Kasus: SMKN 1 Cimahi',
        //image: 'images/studi-kasus-cimahi.jpg', // Ganti dengan path gambar Anda
        text: 'SMK ini adalah pusat keunggulan untuk industri kreatif dan ICT. TEFA mereka berfungsi seperti studio kreatif sungguhan. Siswa di jurusan Animasi, RPL, dan Penyiaran dikelompokkan dalam "studio" untuk mengerjakan proyek komersial dari klien eksternal, baik nasional maupun internasional.',
        pointsTitle: 'Model Implementasi:',
        points: [
            '<strong>Model Studio/Agensi:</strong> Proses pembelajaran diatur seperti studio animasi atau <strong>software house</strong>, lengkap dengan manajer proyek (guru) dan tim produksi (siswa).',
            '<strong>Proyek Komersial Nyata:</strong> Siswa terlibat langsung dalam pembuatan film animasi 2D/3D, aplikasi <strong>mobile</strong>, dan <strong>software</strong> pesanan klien.',
            '<strong>Kemitraan Global:</strong> Menjalin kerja sama dengan studio animasi internasional (misalnya di Jepang) untuk magang, <strong>project-based learning</strong>, dan penyerapan lulusan.',
            '<strong>Penilaian Berbasis Proyek:</strong> Ujian kompetensi siswa dinilai langsung dari kualitas dan ketepatan waktu proyek komersial yang mereka kerjakan.'
        ]
    },
    semarang: {
        title: 'Studi Kasus: SMKN 7 Semarang',
        //image: 'images/studi-kasus-semarang.jpg', // Ganti dengan path gambar Anda
        text: 'SMKN 7 (STM Pembangunan) mengubah TEFA mereka menjadi konsep "Technopark" yang lebih luas. Ini adalah pusat inovasi yang tidak hanya memproduksi, tetapi juga melayani masyarakat umum. TEFA otomotif mereka, misalnya, beroperasi sebagai bengkel komersial yang menerima pelanggan dari luar.',
        pointsTitle: 'Poin Unggulan:',
        points: [
            '<strong>TEFA Berbasis Jasa:</strong> Bengkel otomotif (Technopark) mereka menerima servis pelanggan umum, memberikan siswa pengalaman <strong>customer service</strong> dan diagnosis masalah yang nyata.',
            '<strong>Model Technopark:</strong> Berfungsi sebagai pusat inkubasi teknologi dan kewirausahaan, menjembatani ide-ide siswa menjadi prototipe yang siap bisnis.',
            '<strong>Kemitraan Perusahaan Besar:</strong> Kemitraan strategis dengan perusahaan besar seperti Samsung (Samsung Tech Institute) dan Axioo (Axioo Class Program) untuk kurikulum dan teknologi.',
            '<strong>Unit Bisnis Mandiri:</strong> Setiap unit TEFA dikelola sebagai unit bisnis semi-otonom yang melatih siswa dalam manajemen dan kewirausahaan.'
        ]
    }
};

    // Fungsi untuk menampilkan modal
    function openModal(data) {
        //const data = strategyData[strategyKey];
        if (data) {
            modalTitle.textContent = data.title;
            modalImage.src = data.image;
            modalText.textContent = data.text;
            
            modalPointsTitle.textContent = data.pointsTitle;
            modalPointsList.innerHTML = ''; // Kosongkan list sebelumnya
            data.points.forEach(point => {
                const li = document.createElement('li');
                li.textContent = point;
                modalPointsList.appendChild(li);
            });

            modal.classList.add('active'); // Tambah class active untuk transisi CSS
            document.body.style.overflow = 'hidden'; // Nonaktifkan scroll body
        }
    }

    // Fungsi untuk menutup modal
    function closeModal() {
        modal.classList.remove('active'); // Hapus class active
        document.body.style.overflow = ''; // Aktifkan kembali scroll body
    }

    function populateDetailPanel(data){
        if (!data) return;

        let pointsHTML = '';
        data.points.forEach(point=> {
            pointsHTML += `<li>${point}</li>`;
        });

        const contentHTML = `
            <div class="strategu-detail-content">
                <img id="deetail-image" src="${data.image}" alt="${data.title}">
                <h2 id="detail-title">${data.title}</h2>
                <p id="detail-text">${data.text}</p>
                <div class="model-points">
                    <h5 id="detail-points-title">${data.pointsTitle}</h5>
                    <ul id="detail-points-list">
                        ${pointsHTML}
                    </ul>
                </div>
            </div>
        `;

        strategyDetailPanel.innerHTML = contentHTML;
    }

    strategyCards.forEach(card => {
        card.addEventListener('click', () => {

            if(!strategyContainer.classList.contains('is-detail-view')){
                strategyContainer.classList.add('is-detail-view');
            }

            strategyCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');

            const strategyKey = card.dataset.strategy;
            const data = strategyData[strategyKey];
            populateDetailPanel(data);
        });
    });
    

    flowSteps.forEach(step => {
        step.addEventListener('click', () => {
            const stepKey = step.dataset.step;
            const data = processData[stepKey];
            const detailPanel = step.querySelector('.proses-card-detail');
            const summaryPanel = step.querySelector('.proses-card-summary');
        
        // Ambil info dari summary untuk dipakai di detail
            const iconClass = summaryPanel.querySelector('.icon').className;
            const titleText = summaryPanel.querySelector('h4').textContent;

        // Cek apakah kartu ini SUDAH terbuka
            const isOpen = step.classList.contains('is-open');

        // 1. Tutup semua kartu LAIN
            flowSteps.forEach(otherStep => {
                if (otherStep !== step) {
                    otherStep.classList.remove('is-open');
                // Kosongkan panel lain agar tidak menumpuk
                    otherStep.querySelector('.proses-card-detail').innerHTML = ''; 
                }
            });

        // 2. Jika kartu ini sudah terbuka, tutup saja dan selesai
            if (isOpen) {
                step.classList.remove('is-open');
                detailPanel.innerHTML = ''; // Kosongkan isinya
            } else {
            // 3. Jika kartu ini BELUM terbuka, bangun HTML dan buka
            
            // Buat Poin-poin (<li>)
                let pointsHTML = '';
                data.points.forEach(point => {
                    pointsHTML += `<li>${point}</li>`;
                });

            // Bangun HTML detail LENGKAP (sesuai permintaan Anda)
                const contentHTML = `
                    <div class="proses-card-detail-header">
                        <i class="${iconClass}"></i>
                        <h4>${titleText}</h4>
                    </div>
                    <div class="proses-card-detail-body">
                        <p>${data.text}</p>
                        <h5>${data.pointsTitle}</h5>
                        <ul>
                            ${pointsHTML}
                        </ul>
                    </div>
                `;

            // Masukkan HTML ke panel detail dan buka kartunya
                detailPanel.innerHTML = contentHTML;
                step.classList.add('is-open');
            }
        });
    });

    // =========================================================
// LISTENER BARU UNTUK STUDI KASUS (Accordion)
// =========================================================
    caseStudyCards.forEach(card => {
        card.addEventListener('click', () => {
            const caseKey = card.dataset.case;
            const data = caseStudyData[caseKey]; // Ambil data dari caseStudyData
            const detailPanel = card.querySelector('.case-item-detail');
            const summaryPanel = card.querySelector('.case-item-summary');

        // Ambil info dari summary untuk dipakai di detail
            const imageSrc = summaryPanel.querySelector('img').src;
            const titleText = summaryPanel.querySelector('h4').textContent;

        // Cek apakah kartu ini SUDAH terbuka
            const isOpen = card.classList.contains('is-open');

        // 1. Tutup semua kartu LAIN
            caseStudyCards.forEach(otherCard => {
                if (otherCard !== card) {
                    otherCard.classList.remove('is-open');
                    otherCard.querySelector('.case-item-detail').innerHTML = ''; 
                }
            });

        // 2. Jika kartu ini sudah terbuka, tutup saja
            if (isOpen) {
                card.classList.remove('is-open');
                detailPanel.innerHTML = '';
            } else {
            // 3. Jika kartu ini BELUM terbuka, bangun HTML dan buka

            // Buat Poin-poin (<li>)
                let pointsHTML = '';
                data.points.forEach(point => {
                    pointsHTML += `<li>${point}</li>`;
                });

            // Bangun HTML detail LENGKAP
                const contentHTML = `
                    <div class="detail-header">
                        <img src="${imageSrc}" alt="${titleText}">
                        <h4>${titleText}</h4>
                    </div>
                    <div class="detail-body">
                        <p>${data.text}</p>
                        <h5>${data.pointsTitle}</h5>
                        <ul>
                            ${pointsHTML}
                        </ul>
                    </div>
                `;

            // Masukkan HTML ke panel detail dan buka kartunya
                detailPanel.innerHTML = contentHTML;
                card.classList.add('is-open');
            }
        });
    });
    // Event listener untuk tombol tutup modal
    closeButton.addEventListener('click', closeModal);

    // Event listener untuk menutup modal jika klik di luar area konten modal
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Event listener untuk menutup modal dengan tombol ESC
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    // Smooth scrolling for navigation
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});