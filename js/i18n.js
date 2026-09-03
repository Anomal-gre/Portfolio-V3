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
      hero_intro: 'Third-year student specializing in Communication & Content Creation, combining strengths in content ideation and visual design across numerous real-world projects.',
      hero_selected: 'Selected Work',
      hero_years: '2022 – 2026',
      hero_scroll: 'Scroll',
      neko_tooltip: 'Click or hold',
      btn_view_more: 'View more',
      btn_show_less: 'Show less',
      btn_open_part: 'Open',
      btn_close_part: 'Collapse',

      // Project names
      proj_tbl_name: 'Tôi Bản Lĩnh 2026',
      proj_tbl_desc: 'Flagship university-wide public speaking and leadership competition. Architected the complete visual identity and centralized design system for cross-team collaboration.',
      proj_tbl_role: 'Lead Visual Designer',
      proj_tbl_deliverables: 'Design System, Key Visual, Social Media, Stage Design',

      proj_hola_name: 'Hola Radio',
      proj_hola_desc: 'Brand identity and visual system for a student radio initiative, establishing a cohesive voice across digital platforms.',
      proj_hola_role: 'Designer',
      proj_hola_deliverables: 'Brand Identity, Social Media',

      proj_ws_name: 'Workshop "Gen Z Doing Research"',
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

      proj_gen_name: 'Gen 20 Member Recruitment',
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
      other_ohwow_note: '(Product in experimental phase)',
      other_ohwow_desc: 'Online Dots & Boxes multiplayer game — real-time strategy board game with ELO ranking.',
      other_cnc_name: 'Chọn & Chốt',
      other_cnc_note: '(Product in experimental phase)',
      other_cnc_desc: 'Independent tech review & buying guide — "I choose, you decide."',
      other_cornellius_name: 'Teto Cornellius',
      other_cornellius_note: '(Personal build — not yet customizable)',
      other_cornellius_desc: 'Note-taking app using the Cornell method for structured and effective learning.',
      other_taskous_name: 'Teto Taskous',
      other_taskous_note: '(Personal build — not yet customizable)',
      other_taskous_desc: 'Sticky note-style task manager — lightweight reminders to never miss a deadline.',

      // About
      about_title: "Hi there, Bao's here",
      about_profile_meta: 'PROFILE',
      about_text_1: 'I am a graphic designer and student leader based in Hanoi, focusing on the intersection of brand direction, visual communication, and creative operations. I gravitate toward projects where complex ideas need to be distilled into cohesive design systems and compelling visual stories that resonate with communities.',
      about_text_2: 'Currently studying Industrial & Graphic Design at VNU University of Engineering and Technology (VNU-UET), my experience spans co-founding creative initiatives, directing media operations for university organizations, and leading visual design for national student competitions. A growing share of my workflow sits where visual design meets AI — integrating generative tools into concept drafting, copywriting, and asset production to scale execution speed without compromising artistic judgment or craft.',
      about_text_3: 'Beyond visual output, I care deeply about the people side of creative leadership: mentoring peers, establishing design guidelines, and building repeatable workflows that help teams deliver consistent, high-impact work. I am always open to meaningful connections around creative direction, communication strategy, and community-driven initiatives.',
      about_location: 'Hanoi, Vietnam',
      about_education: 'VNU University of Engineering & Technology',
      about_degree: 'Bachelor of Industrial & Graphic Design',
      about_gpa: 'GPA: 3.57 / 4.0',
      about_email_label: 'Email',
      about_email_business: '(For Business)',
      about_email_activities: '(For Extra Curriculum Activities)',
      about_location_label: 'Location',
      about_education_label: 'Education',
      skills_label: 'Tools & Skills',

      // Footer
      footer_portfolio: 'Portfolio',
      footer_cv: 'CV',
      footer_cv_work: 'Work / Business',
      footer_cv_activities: 'Extra Curriculum Activities',
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
      hero_intro: 'Sinh viên năm ba định hướng phát triển trong Truyền thông & Sáng tạo nội dung, kết hợp thế mạnh lên ý tưởng và thiết kế hình ảnh qua nhiều dự án thực tế.',
      hero_selected: 'Sản phẩm nổi bật',
      hero_years: '2022 – 2026',
      hero_scroll: 'Cuộn xuống',
      neko_tooltip: 'Click hoặc giữ',
      btn_view_more: 'Xem thêm',
      btn_show_less: 'Thu gọn',
      btn_open_part: 'Mở xem',
      btn_close_part: 'Thu gọn',

      // Project names
      proj_tbl_name: 'Tôi Bản Lĩnh 2026',
      proj_tbl_desc: 'Cuộc thi thuyết trình và phát triển bản lĩnh cấp trường hàng năm. Xây dựng hoàn chỉnh nhận diện thương hiệu và hệ thống thiết kế tập trung cho sự phối hợp đa nhóm.',
      proj_tbl_role: 'Lead Visual Designer',
      proj_tbl_deliverables: 'Hệ thống thiết kế, Key Visual, Mạng xã hội, Thiết kế sân khấu',

      proj_hola_name: 'Hola Radio',
      proj_hola_desc: 'Nhận diện thương hiệu và hệ thống hình ảnh cho một sáng kiến radio sinh viên, thiết lập giọng nói nhất quán trên các nền tảng số.',
      proj_hola_role: 'Designer',
      proj_hola_deliverables: 'Nhận diện thương hiệu, Mạng xã hội',

      proj_ws_name: 'Workshop "Gen Z làm nghiên cứu"',
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

      proj_gen_name: 'Sự kiện Tuyển thành viên CLB Gen 20',
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
      other_ohwow_note: '(Sản phẩm trong giai đoạn thử nghiệm)',
      other_ohwow_desc: 'Game chiến thuật Dots & Boxes online — chơi thời gian thực với hệ thống xếp hạng ELO.',
      other_cnc_name: 'Chọn & Chốt',
      other_cnc_note: '(Sản phẩm trong giai đoạn thử nghiệm)',
      other_cnc_desc: 'Trang review & cẩm nang công nghệ độc lập — "Tôi Chọn Bạn Chốt."',
      other_cornellius_name: 'Teto Cornellius',
      other_cornellius_note: '(Bản cá nhân hóa — chưa hỗ trợ tùy biến)',
      other_cornellius_desc: 'Ứng dụng ghi chú theo phương pháp Cornell, hỗ trợ học tập có hệ thống và hiệu quả.',
      other_taskous_name: 'Teto Taskous',
      other_taskous_note: '(Bản cá nhân hóa — chưa hỗ trợ tùy biến)',
      other_taskous_desc: 'Phần mềm quản lý công việc dạng sticky note — nhắc nhở nhẹ nhàng để không bỏ lỡ deadline.',

      // About
      about_title: 'Xin chào, Bảo đây',
      about_profile_meta: 'HỒ SƠ',
      about_text_1: 'Tôi là một graphic designer và người điều phối truyền thông tại Hà Nội, hoạt động tại giao điểm giữa định hướng thương hiệu, truyền thông thị giác và tư duy chiến lược. Tôi thích những bài toán đòi hỏi chuyển hóa các ý tưởng phức tạp thành hệ thống nhận diện tinh gọn, nhất quán và những câu chuyện thị giác chạm được tới cộng đồng.',
      about_text_2: 'Hiện theo học ngành Thiết kế Công nghiệp & Đồ họa tại Trường ĐH Công nghệ (ĐHQGHN), kinh nghiệm của tôi gắn liền với việc đồng sáng lập agency sáng tạo, dẫn dắt đội ngũ truyền thông sinh viên và chịu trách nhiệm thiết kế chính cho các cuộc thi quy mô toàn quốc. Trong quy trình làm việc hằng ngày, tôi chủ động ứng dụng AI vào việc phác thảo ý tưởng, phát triển nội dung và tối ưu hóa tiến độ — xem công nghệ như đòn bẩy gia tăng năng suất mà không đánh đổi tính thẩm mỹ và tiêu chuẩn thủ công.',
      about_text_3: 'Bên cạnh chuyên môn hình ảnh, tôi đặc biệt coi trọng yếu tố con người trong sáng tạo — từ việc hướng dẫn thành viên mới, chuẩn hóa bộ nhận diện thương hiệu đến thiết lập quy trình làm việc khoa học để cả đội ngũ cùng tạo ra kết quả tốt nhất. Tôi luôn hào hứng kết nối với những cơ hội hợp tác trong mảng định hướng sáng tạo, chiến lược truyền thông và các dự án vì cộng đồng.',
      about_location: 'Hà Nội, Việt Nam',
      about_education: 'Trường ĐH Công nghệ, ĐHQG Hà Nội',
      about_degree: 'Cử nhân Thiết kế Công nghiệp & Đồ họa',
      about_gpa: 'GPA: 3.57 / 4.0',
      about_email_label: 'Email',
      about_email_business: '(Công việc)',
      about_email_activities: '(Hoạt động ngoại khóa)',
      about_location_label: 'Địa điểm',
      about_education_label: 'Học vấn',
      skills_label: 'Công cụ & Kỹ năng',

      // Footer
      footer_portfolio: 'Portfolio',
      footer_cv: 'CV',
      footer_cv_work: 'Công việc',
      footer_cv_activities: 'Hoạt động ngoại khóa',
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

    // Dispatch language change event for other modules
    window.dispatchEvent(new CustomEvent('portfolio-lang-change', { detail: { lang } }));
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
