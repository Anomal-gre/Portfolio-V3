/* ── Internationalization (VI/EN) ── */
(function () {
  'use strict';

  const translations = {
    en: {
      // Nav
      nav_work: 'Work',
      nav_other: 'Other',
      nav_about: 'About',

      // Hero
      hero_intro: 'Third-year student with extensive experience initiating and leading media, design, and branding operations across diverse student organizations and national-scale events.',
      hero_selected: 'Selected Work',
      hero_years: '2022 – 26',
      hero_scroll: 'Scroll',

      // Project names
      proj_tbl_name: 'Tôi Bản Lĩnh 2026',
      proj_tbl_desc: 'Flagship university-wide public speaking and leadership competition. Architected the complete visual identity and centralized design system for cross-team collaboration.',
      proj_tbl_role: 'Lead Visual Designer',
      proj_tbl_deliverables: 'Design System, Key Visual, Social Media, Stage Design',

      proj_hola_name: 'Hola Radio',
      proj_hola_desc: 'Brand identity and visual system for a student radio initiative, establishing a cohesive voice across digital platforms.',
      proj_hola_role: 'Designer',
      proj_hola_deliverables: 'Brand Identity, Social Media',

      proj_ws_name: 'UET IS × ULIS TV Workshop',
      proj_ws_desc: 'Collaborative media and design workshop co-organized by two universities. Designed event Key Visuals and standardized joint branding.',
      proj_ws_role: 'Head of Marketing',
      proj_ws_deliverables: 'Key Visual, Content, Cross-club Coordination',

      proj_hr_name: 'HRTech',
      proj_hr_desc: 'Managed end-to-end Facebook media operations for a student HR-tech initiative, establishing visual benchmarks and authoring core graphic assets.',
      proj_hr_role: 'Head of Marketing',
      proj_hr_deliverables: 'Social Media, Visual Governance',

      proj_xmas_name: 'The Xmas Knock',
      proj_xmas_desc: 'Seasonal presentation event blending festive storytelling with student public speaking excellence.',
      proj_xmas_role: 'Designer',
      proj_xmas_deliverables: 'Key Visual, Social Media',

      proj_gen_name: 'Tuyển Gen Campaign',
      proj_gen_desc: 'Full-cycle recruitment campaign for Presentation Club, featuring distinctive visual concept and multi-phase communication strategy.',
      proj_gen_role: 'Head of Marketing',
      proj_gen_deliverables: 'Campaign Concept, Key Visual, Social Media',

      proj_iae_name: 'iae Ambassador 2026',
      proj_iae_desc: 'Youth leadership and global education ambassadorship initiative. Owned nearly 100% of visual production; conceptualized 3 exclusive Key Visual suites for 3 flagship events.',
      proj_iae_role: 'Lead Visual Designer / Creative Lead',
      proj_iae_deliverables: 'Key Visual ×3, Digital Ads, Posters, Backdrops',

      proj_logo_name: 'Logo Collection',
      proj_logo_desc: 'A curated selection of logo and brand identity work across various student organizations and personal projects.',
      proj_logo_role: 'Designer',
      proj_logo_deliverables: 'Logo Design, Brand Identity',

      proj_hyyf_name: 'Green Dreams',
      proj_hyyf_desc: 'Annual grassroots humanitarian initiative providing material donations and emotional support to orphaned children. Raised over 5,000,000 VND.',
      proj_hyyf_role: 'Head of Marketing',
      proj_hyyf_deliverables: 'Campaign Design, Fundraising, Community Outreach',

      // Other projects
      other_title: 'Other Projects',
      other_ohwow_name: 'Ohwow.win',
      other_ohwow_desc: 'Online Dots & Boxes multiplayer game — real-time strategy board game with ELO ranking.',
      other_cnc_name: 'Chọn & Chốt',
      other_cnc_desc: 'Independent tech review & buying guide — "I choose, you decide."',
      other_cornellius_name: 'Teto Cornellius',
      other_cornellius_desc: 'Note-taking app using the Cornell method for structured and effective learning.',
      other_taskous_name: 'Teto Taskous',
      other_taskous_desc: 'Sticky note-style task manager — lightweight reminders to never miss a deadline.',

      // About
      about_title: 'About',
      about_text_1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      about_text_2: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      about_location: 'Hanoi, Vietnam',
      about_education: 'VNU University of Engineering & Technology',
      about_degree: 'Bachelor of Industrial & Graphic Design',
      about_gpa: 'GPA: 3.57 / 4.0',
      about_email_label: 'Email',
      about_location_label: 'Location',
      about_education_label: 'Education',
      skills_label: 'Tools & Skills',

      // Footer
      footer_portfolio: 'Portfolio',
      footer_cv: 'CV',
      footer_copy: '© 2026 Tran Gia Bao',

      // Types
      type_webapp: 'Web App',
      type_website: 'Website',
      type_software: 'Software',
      type_event: 'Event',
      type_branding: 'Branding',
      type_social: 'Social Media',
      type_campaign: 'Campaign',
      type_identity: 'Identity',
      type_charity: 'Charity',
    },

    vi: {
      // Nav
      nav_work: 'Sản phẩm',
      nav_other: 'Dự án khác',
      nav_about: 'Giới thiệu',

      // Hero
      hero_intro: 'Sinh viên năm ba với kinh nghiệm phong phú trong việc khởi xướng và dẫn dắt các hoạt động truyền thông, thiết kế và xây dựng thương hiệu tại nhiều tổ chức sinh viên và sự kiện quy mô quốc gia.',
      hero_selected: 'Sản phẩm nổi bật',
      hero_years: '2022 – 26',
      hero_scroll: 'Cuộn xuống',

      // Project names
      proj_tbl_name: 'Tôi Bản Lĩnh 2026',
      proj_tbl_desc: 'Cuộc thi thuyết trình và phát triển bản lĩnh cấp trường hàng năm. Xây dựng hoàn chỉnh nhận diện thương hiệu và hệ thống thiết kế tập trung cho sự phối hợp đa nhóm.',
      proj_tbl_role: 'Lead Visual Designer',
      proj_tbl_deliverables: 'Hệ thống thiết kế, Key Visual, Mạng xã hội, Thiết kế sân khấu',

      proj_hola_name: 'Hola Radio',
      proj_hola_desc: 'Nhận diện thương hiệu và hệ thống hình ảnh cho một sáng kiến radio sinh viên, thiết lập giọng nói nhất quán trên các nền tảng số.',
      proj_hola_role: 'Designer',
      proj_hola_deliverables: 'Nhận diện thương hiệu, Mạng xã hội',

      proj_ws_name: 'Workshop UET IS × ULIS TV',
      proj_ws_desc: 'Workshop truyền thông và thiết kế hợp tác giữa hai trường đại học. Thiết kế Key Visual sự kiện và chuẩn hóa thương hiệu chung.',
      proj_ws_role: 'Trưởng ban Truyền thông',
      proj_ws_deliverables: 'Key Visual, Nội dung, Phối hợp liên CLB',

      proj_hr_name: 'HRTech',
      proj_hr_desc: 'Quản lý toàn bộ hoạt động truyền thông Facebook cho sáng kiến HR-tech sinh viên, thiết lập chuẩn hình ảnh và sáng tạo các sản phẩm đồ họa chủ đạo.',
      proj_hr_role: 'Trưởng ban Truyền thông',
      proj_hr_deliverables: 'Mạng xã hội, Quản lý hình ảnh',

      proj_xmas_name: 'The Xmas Knock',
      proj_xmas_desc: 'Sự kiện thuyết trình mùa lễ hội, kết hợp câu chuyện lễ hội với năng lực thuyết trình sinh viên.',
      proj_xmas_role: 'Designer',
      proj_xmas_deliverables: 'Key Visual, Mạng xã hội',

      proj_gen_name: 'Chiến dịch Tuyển Gen',
      proj_gen_desc: 'Chiến dịch tuyển thành viên toàn diện cho CLB Thuyết trình, với concept hình ảnh đặc trưng và chiến lược truyền thông đa giai đoạn.',
      proj_gen_role: 'Trưởng ban Truyền thông',
      proj_gen_deliverables: 'Concept chiến dịch, Key Visual, Mạng xã hội',

      proj_iae_name: 'iae Ambassador 2026',
      proj_iae_desc: 'Chương trình đại sứ lãnh đạo trẻ và giáo dục toàn cầu. Đảm nhận gần 100% sản xuất hình ảnh; sáng tạo 3 bộ Key Visual riêng cho 3 sự kiện chính.',
      proj_iae_role: 'Lead Visual Designer / Creative Lead',
      proj_iae_deliverables: 'Key Visual ×3, Quảng cáo số, Poster, Backdrop',

      proj_logo_name: 'Bộ sưu tập Logo',
      proj_logo_desc: 'Tuyển chọn các tác phẩm logo và nhận diện thương hiệu cho nhiều tổ chức sinh viên và dự án cá nhân.',
      proj_logo_role: 'Designer',
      proj_logo_deliverables: 'Thiết kế Logo, Nhận diện thương hiệu',

      proj_hyyf_name: 'Những Ước Mơ Xanh',
      proj_hyyf_desc: 'Sáng kiến nhân đạo cộng đồng thường niên, cung cấp quyên góp vật chất và hỗ trợ tinh thần cho trẻ mồ côi. Quyên góp trên 5.000.000 VND.',
      proj_hyyf_role: 'Trưởng ban Truyền thông',
      proj_hyyf_deliverables: 'Thiết kế chiến dịch, Gây quỹ, Tiếp cận cộng đồng',

      // Other projects
      other_title: 'Dự án khác',
      other_ohwow_name: 'Ohwow.win',
      other_ohwow_desc: 'Game chiến thuật Dots & Boxes online — chơi thời gian thực với hệ thống xếp hạng ELO.',
      other_cnc_name: 'Chọn & Chốt',
      other_cnc_desc: 'Trang review & cẩm nang công nghệ độc lập — "Tôi Chọn Bạn Chốt."',
      other_cornellius_name: 'Teto Cornellius',
      other_cornellius_desc: 'Ứng dụng ghi chú theo phương pháp Cornell, hỗ trợ học tập có hệ thống và hiệu quả.',
      other_taskous_name: 'Teto Taskous',
      other_taskous_desc: 'Phần mềm quản lý công việc dạng sticky note — nhắc nhở nhẹ nhàng để không bỏ lỡ deadline.',

      // About
      about_title: 'Giới thiệu',
      about_text_1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      about_text_2: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      about_location: 'Hà Nội, Việt Nam',
      about_education: 'Trường ĐH Công nghệ, ĐHQG Hà Nội',
      about_degree: 'Cử nhân Thiết kế Công nghiệp & Đồ họa',
      about_gpa: 'GPA: 3.57 / 4.0',
      about_email_label: 'Email',
      about_location_label: 'Địa điểm',
      about_education_label: 'Học vấn',
      skills_label: 'Công cụ & Kỹ năng',

      // Footer
      footer_portfolio: 'Portfolio',
      footer_cv: 'CV',
      footer_copy: '© 2026 Trần Gia Bảo',

      // Types
      type_webapp: 'Ứng dụng Web',
      type_website: 'Website',
      type_software: 'Phần mềm',
      type_event: 'Sự kiện',
      type_branding: 'Thương hiệu',
      type_social: 'Mạng xã hội',
      type_campaign: 'Chiến dịch',
      type_identity: 'Nhận diện',
      type_charity: 'Từ thiện',
    }
  };

  let currentLang = localStorage.getItem('portfolio-lang') || 'en';

  function applyLang(lang) {
    currentLang = lang;
    localStorage.setItem('portfolio-lang', lang);

    const dict = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        if (key === 'hero_intro') {
          const words = dict[key].split(' ');
          el.innerHTML = words.map((w, i) => `<span class="word" style="--word-i:${i}"><span class="word-inner">${w}&nbsp;</span></span>`).join('');
          el.classList.remove('is-visible');
          requestAnimationFrame(() => {
            el.classList.add('is-visible');
          });
        } else {
          el.textContent = dict[key];
        }
      }
    });

    // Update toggle button text
    const toggleBtn = document.getElementById('lang-toggle');
    if (toggleBtn) {
      toggleBtn.textContent = lang === 'en' ? 'VI' : 'EN';
    }

    // Update html lang attribute
    document.documentElement.lang = lang === 'en' ? 'en' : 'vi';
  }

  // Toggle handler
  const toggleBtn = document.getElementById('lang-toggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      applyLang(currentLang === 'en' ? 'vi' : 'en');
    });
  }

  // Mobile toggle
  const mobileToggle = document.getElementById('lang-toggle-mobile');
  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      applyLang(currentLang === 'en' ? 'vi' : 'en');
    });
  }

  // Initial apply
  applyLang(currentLang);

  // Expose for external use
  window.i18n = { applyLang, getCurrentLang: () => currentLang };
})();
