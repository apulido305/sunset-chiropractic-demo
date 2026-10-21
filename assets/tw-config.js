// Shared Tailwind theme for every page (loaded right after the Tailwind CDN script).
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: '#6f4327',
        'primary-container': '#8b5a3c',
        'terracotta-rich': '#8B5A3C',
        'terracotta-deep': '#6E4329',
        'terracotta-soft': '#F4ECE6',
        'slate-charcoal': '#23201E',
        'slate-muted': '#57534E',
        // Darkened from #D9A566 so icons reach 3:1 on light backgrounds (WCAG 1.4.11).
        'amber-gold': '#9A6A2E',
        'amber-subtle': '#FBF3E6',
        // Darkened from #5E7C4A so text reaches 4.5:1 on the sage-subtle pill (WCAG 1.4.3).
        'wellness-sage': '#4F6B3D',
        'wellness-sage-subtle': '#EDF2EA',
        surface: '#f9f9f6',
        'surface-cream': '#FAFAF7',
        'surface-card': '#FFFFFF',
        'surface-tinted': '#F3EFEA',
        'field-border': '#8A8580',
        whatsapp: '#128C7E',
      },
      fontFamily: {
        display: ['Outfit', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        label: ['Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
};
