# Nishant Kumar - ML Engineer Portfolio

A modern, responsive portfolio website showcasing ML engineering and full-stack development skills.

## Features

- **ML-Focused**: Emphasizes machine learning projects and expertise
- **Responsive Design**: Works perfectly on all devices
- **Interactive Elements**: Custom cursor, progress bar, animations
- **Modular Structure**: Separated HTML, CSS, and JavaScript files
- **Easy Deployment**: Ready for Netlify hosting

## File Structure

```
my-profile/
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js          # React components and JavaScript
├── netlify.toml       # Netlify configuration
├── profile.jpg        # Your profile image (add this)
└── README.md          # This file
```

## Setup Instructions

1. **Add Your Profile Image**:
   - Place your profile picture as `profile.jpg` in the root directory
   - Recommended size: 300x300px or larger (square aspect ratio)

2. **Update Resume Link**:
   - In `script.js`, find the `resume` field in DATA object
   - Replace with your actual resume link (Google Drive, Dropbox, etc.)

3. **Customize Content**:
   - Edit the DATA object in `script.js` to update your information
   - Modify projects, skills, and contact details

## Deployment to Netlify

### Pre-Deployment Checklist
- [ ] Update `resume` link in HTML (change `YOUR_RESUME_FILE_ID` to your actual Google Drive/Dropbox link)
- [ ] Update `photoSrc` in HTML (change `https://i.imgur.com/yourphoto.jpg` to your hosted profile photo URL)
- [ ] Verify all social links (LinkedIn, GitHub, email) are correct
- [ ] Test contact form locally before deploying
- [ ] Check all project links are working
- [ ] Review all text for typos and accuracy

### Option 1: Drag & Drop (Easiest)
1. Go to [Netlify](https://netlify.com)
2. Sign up/login
3. Drag the entire `my-profile` folder to the deployment area
4. Your site will be live instantly with automatic form handling!

### Option 2: GitHub Integration
1. Upload this project to a GitHub repository
2. Connect your GitHub account to Netlify
3. Select this repository for deployment
4. Netlify will automatically deploy and provide a live URL
5. Contact form will work automatically!

## Customization

- **Colors**: Modify the CSS variables in `styles.css`
- **Content**: Update the DATA object in `script.js`
- **Fonts**: Change Google Fonts in `index.html`
- **Animations**: Adjust timing and effects in CSS

## Technologies Used

- React (via CDN)
- Vanilla CSS
- JavaScript
- Google Fonts
- Netlify for hosting

## Browser Support

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- Mobile browsers: Responsive design

---

Built with ❤️ by Nishant Kumar