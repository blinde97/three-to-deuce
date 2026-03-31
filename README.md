# 3 to Deuce Website

A modern, responsive website built based on the 3toDeuceV11.pdf document.

## Features

- Modern, clean design
- Fully responsive (mobile-friendly)
- Smooth scrolling navigation
- Interactive contact form
- Fade-in animations on scroll
- Sticky navigation bar
- Branded logo and show poster artwork

## Getting Started

### Local Development

1. Open `index.html` in your web browser
   - Simply double-click the file, or
   - Right-click and select "Open with" your preferred browser

2. Or use a local server (recommended):
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # To allow non local user to view:
   ngrok http 8000
   ```

3. Open your browser and navigate to:
   - `http://localhost:8000` (if using a local server)
   - Or the file path if opening directly

## File Structure

```
three-to-deuce/
├── index.html      # Main HTML file
├── styles.css      # Stylesheet
├── script.js       # JavaScript functionality
├── README.md       # This file
├── images/         # Site images used by the pages
│   ├── updated-logo.jpg
│   ├── show-poster.png
│   ├── tennis-ball.png
│   ├── logo1-transparent.png
│   └── logo2-transparent.png
└── 3toDeuceV11.pdf # Original PDF document
```

## Customization

### Updating Content

Edit `index.html` to update:
- Text content
- Section titles
- Service descriptions
- Contact information

### Changing Colors

Edit `styles.css` and modify the CSS variables in the `:root` selector:
- `--primary-color`: Main brand color
- `--secondary-color`: Secondary brand color
- `--accent-color`: Accent color
- `--text-dark`: Dark text color
- `--text-light`: Light text color

### Adding Sections

1. Add a new section in `index.html`
2. Add corresponding styles in `styles.css`
3. Update navigation menu if needed

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Notes

This is a template website. To fully customize it based on the PDF content, you may need to:
1. Extract specific content from the PDF
2. Update the placeholder text with actual content
3. Add any specific features or sections mentioned in the PDF
