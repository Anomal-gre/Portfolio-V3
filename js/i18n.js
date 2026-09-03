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

      // Project metadata labels
      meta_role: 'Role',
      meta_deliverables: 'Deliverables',
      meta_organization: 'Organization',

      // Project names
      proj_tbl_name: 'Tôi Bản Lĩnh 2026',
      proj_tbl_desc: 'An annual public speaking and leadership competition organized by Presentation Club (VNU-UET) to foster critical thinking, articulate expression, and public confidence. The journey culminates in a high-stakes Grand Finale where the top 6 finalists compete in head-to-head debate and inspiring keynote speeches.',
      proj_tbl_role: 'Lead Visual Designer',
      proj_tbl_deliverables: 'Key Visual, Social Media, Print Design',
      proj_tbl_org: 'Presentation Club of UET',

      proj_hola_name: 'Hola Radio',
      proj_hola_desc: 'A student podcast and radio initiative by Presentation Club accompanying UET freshers during their military training term at Hoa Lac. Designed warm, autumnal visual assets and social announcement templates to connect student stories.',
      proj_hola_role: 'Designer',
      proj_hola_deliverables: 'Brand Identity, Social Media',

      proj_ws_name: 'Workshop "Gen Z Doing Research"',
      proj_ws_desc: 'A comprehensive workshop series organized by Presentation Club, guiding students step-by-step from topic ideation and methodology to completing research papers and theses. Features practical guidance on leveraging AI tools effectively and ethically.',
      proj_ws_role: 'Head of Marketing',
      proj_ws_deliverables: 'Key Visual, Content',

      proj_hr_name: 'HRTech — Gen 16 Recruitment',
      proj_hr_desc: 'Full-cycle member recruitment campaign for the Human Resources Club (HRC). Developed the creative concept, authored content, and designed the core visual identity and social assets.',
      proj_hr_role: 'Head of Marketing',
      proj_hr_deliverables: 'Campaign Concept, Graphic Design, Content',
      proj_hr_org: 'HRTech - Human Resources Club of UET',

      proj_xmas_name: 'The Xmas Knock',
      proj_xmas_desc: 'A holiday initiative by Presentation Club featuring the "Letters to Santa" mailbox — an open, gentle space for students to slow down, share unspoken thoughts, and send warm wishes to Santa.',
      proj_xmas_role: 'Designer',
      proj_xmas_deliverables: 'Key Visual, Social Media',

      proj_gen_name: 'Gen 20 Member Recruitment',
      proj_gen_desc: 'Full-cycle recruitment campaign for Presentation Club, featuring distinctive visual concept, content development, and a multi-phase communication strategy.',
      proj_gen_role: 'Head of Marketing',
      proj_gen_deliverables: 'Campaign Concept, Content, Social Media',

      proj_iae_name: 'iae Ambassador Season 3',
      proj_iae_desc: 'A 3-month hybrid project by iae GLOBAL Vietnam creating an international working culture and real-world media execution environment for Vietnamese students. Led visual production and crafted 3 signature Key Visual suites.',
      proj_iae_role: 'Lead Visual Designer / Creative Lead',
      proj_iae_deliverables: 'Key Visual ×3, Digital Ads, Posters, Backdrops',

      proj_logo_name: 'Logo Archive Across My Creative Journey',
      proj_logo_note: 'Bonus project',
      proj_logo_desc: 'A personal collection of my logos, revised and remade many times across different chapters of my creative journey. Some or perhaps most might not look pretty, yet they remain an irreplaceable part of my life from high school through to university, as I now reach the halfway mark of my degree.',

      proj_hyyf_name: 'Green Dreams',
      proj_hyyf_desc: 'A youth fundraising and charity campaign organized by Hung Yen Youth Forum (HYYF). Directed social media communications and created visual assets to mobilize community donations for disadvantaged children.',
      proj_hyyf_role: 'Head of Marketing',
      proj_hyyf_deliverables: 'Social Media',
      proj_hyyf_org: 'Hung Yen Youth Forum (HYYF)',

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

      // Project metadata labels
      meta_role: 'Vai trò',
      meta_deliverables: 'Hạng mục',
      meta_organization: 'Tổ chức',

      // Project names
      proj_tbl_name: 'Tôi Bản Lĩnh 2026',
      proj_tbl_desc: 'Cuộc thi thường niên do CLB Thuyết trình (VNU-UET) tổ chức nhằm rèn luyện tư duy phản biện, kỹ năng diễn đạt và sự tự tin trước đám đông cho người trẻ; khép lại bằng đêm Chung kết kịch tính với màn tranh tài của 6 thí sinh xuất sắc nhất qua hai phần thi Hùng biện đối kháng và Diễn thuyết truyền cảm hứng.',
      proj_tbl_role: 'Lead Visual Designer',
      proj_tbl_deliverables: 'Key Visual, Social Media, Print Design',
      proj_tbl_org: 'Câu lạc bộ Thuyết trình (VNU-UET)',

      proj_hola_name: 'Hola Radio',
      proj_hola_desc: 'Dự án phát thanh sinh viên do CLB Thuyết trình khởi xướng nhằm đồng hành cùng tân sinh viên UET trong kỳ học quân sự tại Hòa Lạc; phụ trách thiết kế trọn bộ nhận diện ấm áp mang sắc thu và các ấn phẩm truyền thông mạng xã hội kết nối câu chuyện sinh viên.',
      proj_hola_role: 'Designer',
      proj_hola_deliverables: 'Brand Identity, Social Media',

      proj_ws_name: 'Workshop "Gen Z làm nghiên cứu"',
      proj_ws_desc: 'Chuỗi Workshop do CLB Thuyết trình tổ chức, định hướng sinh viên tiếp cận nghiên cứu khoa học và khóa luận tốt nghiệp bài bản từ ý tưởng đến hoàn thiện đề tài, đồng thời trang bị tư duy làm chủ công cụ AI hiệu quả.',
      proj_ws_role: 'Trưởng ban Truyền thông',
      proj_ws_deliverables: 'Key Visual, Content',

      proj_hr_name: 'HRTech — Tuyển thành viên Gen 16',
      proj_hr_desc: 'Chiến dịch tuyển thành viên Gen 16 của CLB Nguồn Nhân Lực (HRC). Trực tiếp lên ý tưởng concept, biên soạn nội dung và thiết kế đồng bộ các ấn phẩm truyền thông chủ đạo.',
      proj_hr_role: 'Trưởng ban Truyền thông',
      proj_hr_deliverables: 'Campaign Concept, Graphic Design, Content',
      proj_hr_org: 'HRTech - CLB Nguồn nhân Lực UET',

      proj_xmas_name: 'The Xmas Knock',
      proj_xmas_desc: 'Chiến dịch Giáng sinh của CLB Thuyết trình với "Hòm thư Letters to Santa" — một khoảng dừng dịu dàng dịp cuối năm để người trẻ trải lòng, gửi gắm những tâm tư và ước nguyện chưa kịp cất thành lời.',
      proj_xmas_role: 'Designer',
      proj_xmas_deliverables: 'Key Visual, Social Media',

      proj_gen_name: 'Sự kiện Tuyển thành viên CLB Gen 20',
      proj_gen_desc: 'Chiến dịch tuyển thành viên toàn diện cho CLB Thuyết trình, với concept hình ảnh đặc trưng, phát triển nội dung và chiến lược truyền thông đa giai đoạn.',
      proj_gen_role: 'Trưởng ban Truyền thông',
      proj_gen_deliverables: 'Campaign Concept, Content, Social Media',

      proj_iae_name: 'iae Ambassador mùa 3',
      proj_iae_desc: 'Dự án 3 tháng do iae GLOBAL Việt Nam tổ chức nhằm tạo môi trường trải nghiệm văn hóa làm việc quốc tế và vận hành chiến dịch truyền thông thực tế. Đảm nhận sản xuất hình ảnh và sáng tạo 3 bộ Key Visual chủ đạo.',
      proj_iae_role: 'Lead Visual Designer / Creative Lead',
      proj_iae_deliverables: 'Key Visual ×3, Digital Ads, Posters, Backdrops',

      proj_logo_name: 'Tổng hợp logo của tôi qua từng giai đoạn',
      proj_logo_note: 'Dự án bonus',
      proj_logo_desc: 'Tuyển tập logo của cá nhân tôi, được chỉnh sửa và làm lại nhiều lần qua nhiều giai đoạn trong hành trình sáng tạo của tôi, có thể một số hoặc đa số nó không đẹp nhưng vẫn là một phần không thể thiếu trong những năm tháng cấp ba cho đến khi lên đại học và giờ là đã hoàn thành một nửa khóa học đại học như hiện tại.',

      proj_hyyf_name: 'Những Ước Mơ Xanh',
      proj_hyyf_desc: 'Chiến dịch gây quỹ thiện nguyện do Diễn đàn Tuổi trẻ Hưng Yên (HYYF) tổ chức; chịu trách nhiệm điều phối truyền thông mạng xã hội và thiết kế ấn phẩm nhằm lan tỏa thông điệp sẻ chia, vận động nguồn lực ủng hộ trẻ em có hoàn cảnh khó khăn.',
      proj_hyyf_role: 'Trưởng ban Truyền thông',
      proj_hyyf_deliverables: 'Social Media',
      proj_hyyf_org: 'Diễn đàn Tuổi trẻ Hưng Yên',

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

  let currentLang = localStorage.getItem('portfolio-lang') || 'vi';

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
