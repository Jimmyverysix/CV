// 悬浮目录功能
document.addEventListener('DOMContentLoaded', function() {
  const toc = document.getElementById('floating-toc');
  const tocLinks = toc ? toc.querySelectorAll('.toc-list a') : [];
  const sections = [];
  
  // 获取所有章节元素
  tocLinks.forEach(link => {
    const targetId = link.getAttribute('href').substring(1);
    const section = document.getElementById(targetId);
    if (section) {
      sections.push({
        id: targetId,
        element: section,
        link: link
      });
    }
  });
  
  // 平滑滚动到目标位置
  tocLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 100; // 减去导航栏高度
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // 监听滚动事件，高亮当前章节
  function updateActiveSection() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    
    let activeSection = null;
    
    sections.forEach(section => {
      const rect = section.element.getBoundingClientRect();
      const sectionTop = rect.top + scrollTop;
      const sectionBottom = sectionTop + rect.height;
      
      // 如果章节在视窗中或刚刚经过
      if (scrollTop + 150 >= sectionTop && scrollTop + 150 < sectionBottom) {
        activeSection = section;
      }
    });
    
    // 更新高亮状态
    sections.forEach(section => {
      section.link.classList.remove('active');
    });
    
    if (activeSection) {
      activeSection.link.classList.add('active');
    }
  }
  
  // 添加滚动监听
  window.addEventListener('scroll', updateActiveSection);
  
  // 初始化时调用一次
  updateActiveSection();
  
  // 响应式处理：在小屏幕上隐藏悬浮目录
  function handleResize() {
    if (window.innerWidth <= 768) {
      if (toc) {
        toc.style.display = 'block';
      }
    } else {
      if (toc) {
        toc.style.display = 'block';
      }
    }
  }
  
  window.addEventListener('resize', handleResize);
  handleResize();
});
