tailwind.config = {
  theme: {
      extend: {
          fontFamily: {
              sans: ['Inter', 'sans-serif'],
              display: ['Space Grotesk', 'sans-serif'],
          },
          colors: {
              void: '#0B0D12',
              glass: 'rgba(255, 255, 255, 0.03)',
              border: 'rgba(255, 255, 255, 0.08)',
              holoCyan: '#38BDF8',
              electricBlue: '#0EA5E9',
              neonViolet: '#818CF8',
          },
          backgroundImage: {
              'glass-gradient': 'linear-gradient(145deg, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0.02) 100%)',
              'glow-gradient': 'radial-gradient(circle at center, rgba(56, 189, 248, 0.15) 0%, transparent 70%)',
          },
          boxShadow: {
              'neon': '0 0 20px rgba(56, 189, 248, 0.3)',
              'card': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
          }
      }
  }
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add('active');
      }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const menuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      mobileMenu.classList.toggle('flex');
      
      const icon = menuBtn.querySelector('i');
      if (mobileMenu.classList.contains('flex')) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-times');
      } else {
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
      }
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
          mobileMenu.classList.add('hidden');
          mobileMenu.classList.remove('flex');
          const icon = menuBtn.querySelector('i');
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
      });
  });
}