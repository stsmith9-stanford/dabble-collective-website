# Dabble Collective - Next.js Website

A modern, responsive website built with Next.js 14 and Tailwind CSS for the Dabble Collective - a group of creators who dabble in various fields.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 14, TypeScript, and Tailwind CSS
- **Responsive Design**: Optimized for all screen sizes from mobile to desktop
- **Accessibility**: Following WCAG guidelines with proper ARIA labels and semantic HTML
- **Performance**: Optimized images, lazy loading, and efficient bundling
- **Design System**: Consistent design tokens based on the `design.json` configuration
- **Interactive Components**: Dynamic forms, hover effects, and smooth animations

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Home page
│   ├── what-we-dabble-in/ # Skills and services page
│   ├── our-collective/    # Team page
│   ├── experiments/       # Projects showcase
│   └── contact/           # Contact form page
├── components/            # Reusable components
│   ├── Navigation.tsx     # Main navigation
│   ├── Hero.tsx          # Hero section component
│   ├── TeamGrid.tsx      # Team member grid
│   ├── CTABanner.tsx     # Call-to-action banner
│   └── Footer.tsx        # Site footer
└── ...
```

## 🎨 Design System

The website follows a design system defined in `design.json` with the following key elements:

### Colors
- **Primary**: `#F97316` (vibrant orange)
- **Accent**: `#60A5FA` (light sky blue)
- **Background**: `#FEFCE8` (warm off-white)
- **Text**: `#1F2937` (dark slate gray)

### Typography
- **Font Family**: Inter (from Google Fonts)
- **Headings**: Bold, uppercase, tracking-wide
- **Body**: Regular weight, good line height for readability

### Layout
- **Container**: Max width 1280px, centered
- **Section Padding**: 6rem vertical
- **Component Gap**: 2rem between elements

## 🛠 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd dabble-collective
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📄 Pages

### Home (`/`)
- Hero section with collective introduction
- Featured team members grid
- Call-to-action for engagement

### What We Dabble In (`/what-we-dabble-in`)
- Showcase of skill areas and expertise
- Interactive cards with hover effects
- Technology and service offerings

### Our Collective (`/our-collective`)
- Complete team member profiles
- Collective values and principles
- Join the collective information

### Experiments (`/experiments`)
- Portfolio of ongoing and completed projects
- Project categorization and status tracking
- Technology stack showcases

### Contact (`/contact`)
- Interactive contact form with validation
- Contact methods and information
- Process overview for new clients

## 🧩 Components

### Navigation
- Fixed header with responsive mobile menu
- Active page highlighting
- Smooth scroll to anchor links

### Hero Section
- Customizable title and subtitle
- Optional call-to-action buttons
- Background decoration elements

### Team Grid
- Responsive 3-column layout
- Avatar placeholders with gradients
- Hover effects and animations

### CTA Banner
- Full-width call-to-action sections
- Customizable headlines and buttons
- Background decorative elements

### Footer
- Site navigation links
- Social media links
- Contact information and legal links

## 🎯 Deployment

### Vercel (Recommended)

1. **Connect your repository to Vercel**
   - Import your Git repository
   - Vercel will auto-detect Next.js settings

2. **Environment Variables** (if needed)
   - Add any required environment variables in Vercel dashboard

3. **Deploy**
   - Automatic deployments on push to main branch
   - Preview deployments for pull requests

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Start production server**
   ```bash
   npm run start
   ```

## 🔧 Customization

### Adding New Pages
1. Create a new folder in `src/app/`
2. Add a `page.tsx` file
3. Update navigation links in `Navigation.tsx`

### Modifying the Design System
1. Update `design.json` with new values
2. Modify `tailwind.config.ts` to reflect changes
3. Update CSS custom properties in `globals.css`

### Adding New Components
1. Create component in `src/components/`
2. Follow existing patterns for props and styling
3. Export from component file for easy imports

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and descriptions
- Keyboard navigation support
- Screen reader compatible
- Color contrast compliance
- Focus indicators

## 🚀 Performance

- Next.js Image optimization
- Automatic code splitting
- Tree shaking for unused code
- CSS optimization with Tailwind
- Font optimization with Google Fonts

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 💬 Support

For questions or support, please contact:
- Email: hello@dabblecollective.com
- Website: [dabblecollective.com](https://dabblecollective.com)

---

Built with ❤️ by the Dabble Collective 