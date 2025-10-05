# DHARITHRI - Postnatal Care Website

A modern, responsive website for DHARITHRI postnatal care center, built with React and CSS.

## 🌟 Features

- **Fully Responsive Design** - Optimized for all screen sizes from mobile to large TVs
- **Modern Pink Theme** - Beautiful pink color scheme throughout the website
- **Smooth Animations** - Modern animations and transitions for enhanced user experience
- **Interactive Photo Gallery** - Showcase facility photos with filtering and modal views
- **Contact Form** - Functional contact form with validation
- **Mobile-First Approach** - Designed with mobile users in mind

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```

3. **Open in Browser**
   Navigate to `http://localhost:3000`

### Build for Production
```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.js       # Navigation header
│   ├── Hero.js         # Hero section
│   ├── About.js        # About section
│   ├── Services.js     # Services showcase
│   ├── Facilities.js    # Photo gallery
│   ├── Contact.js      # Contact form
│   └── Footer.js       # Footer
├── assets/             # Images and media files
├── App.js              # Main app component
├── App.css             # Global styles
├── index.js            # App entry point
└── index.css           # Base styles
```

## 🎨 Design Features

### Color Scheme
- **Primary Pink**: #e91e63
- **Secondary Pink**: #f06292
- **Light Pink**: #f8bbd9
- **Accent Colors**: Various shades of pink and white

### Typography
- **Font Family**: Poppins (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

### Responsive Breakpoints
- **Mobile**: < 480px
- **Tablet**: 480px - 768px
- **Desktop**: 768px - 1200px
- **Large Screens**: > 1200px

## 📱 Sections

1. **Header** - Fixed navigation with smooth scrolling
2. **Hero** - Eye-catching banner with call-to-action
3. **About** - Information about DHARITHRI services
4. **Services** - Detailed service offerings
5. **Facilities** - Photo gallery with filtering
6. **Contact** - Contact form and information
7. **Footer** - Links and additional information

## 🖼️ Adding Your Photos

1. **Add Photos to Assets**
   - Place your facility photos in the `src/assets/` directory
   - Use descriptive filenames (e.g., `private-room-1.jpg`)

2. **Update Image URLs**
   - Open `src/components/Facilities.js`
   - Replace the placeholder Unsplash URLs with your actual photos
   - Update the `image` property in the `facilities` array

3. **Recommended Photo Sizes**
   - Minimum: 1200x800px
   - Recommended: 1920x1080px
   - Format: JPG or PNG

## 🛠️ Customization

### Colors
Update the color scheme in the CSS files:
- Primary pink: `#e91e63`
- Secondary pink: `#f06292`
- Light pink: `#f8bbd9`

### Content
- Update text content in each component file
- Modify contact information in `Contact.js` and `Footer.js`
- Add your actual facility photos

### Styling
- All styles are in individual CSS files for each component
- Global styles are in `index.css` and `App.css`

## 📞 Contact Information

Update the following in your components:
- **Address**: `src/components/Contact.js` and `src/components/Footer.js`
- **Phone**: Contact components
- **Email**: Contact components
- **Social Media**: Footer component

## 🚀 Deployment

### Netlify
1. Build the project: `npm run build`
2. Upload the `build` folder to Netlify
3. Configure custom domain if needed

### Vercel
1. Connect your GitHub repository
2. Vercel will automatically deploy on push

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/dharithri-website",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Deploy: `npm run deploy`

## 📋 TODO

- [ ] Add your actual facility photos
- [ ] Update contact information
- [ ] Add Google Analytics
- [ ] Implement form submission backend
- [ ] Add SEO meta tags
- [ ] Add favicon
- [ ] Test on various devices

## 🤝 Support

For any questions or support, please contact the development team.

---

**DHARITHRI** - Caring for new mothers and their precious babies with love and expertise.
