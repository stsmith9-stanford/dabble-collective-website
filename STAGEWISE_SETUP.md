# Stagewise Toolbar Setup

This project includes the Stagewise AI-powered editing toolbar for enhanced content creation and editing capabilities.

## Quick Setup

The toolbar is already integrated and will work with a demo API key. For full functionality:

1. **Get an API Key** (Optional)
   - Visit [https://stagewise.ai/dashboard](https://stagewise.ai/dashboard)
   - Create an account and get your API key
   - Create a `.env.local` file in the project root:
   ```bash
   NEXT_PUBLIC_STAGEWISE_API_KEY=your_actual_api_key_here
   ```

2. **Current Configuration**
   - **Theme**: Auto (adapts to system dark/light mode)
   - **Position**: Bottom of the screen
   - **Features Enabled**: AI editing, suggestions, collaboration
   - **Features Disabled**: Analytics (for privacy)

## Features

- 🤖 **AI-Powered Editing**: Get intelligent suggestions for content improvement
- 💡 **Smart Suggestions**: Real-time writing assistance
- 🎨 **Visual Editing**: Direct page editing capabilities
- 🔄 **Collaboration**: Share and collaborate on edits
- 📱 **Responsive**: Works on desktop and mobile
- 🎯 **Minimizable**: Can be hidden/shown as needed

## Customization

You can customize the toolbar by modifying the `StagewiseToolbar` component props in `src/app/layout.tsx`:

```typescript
<StagewiseToolbar 
  theme="auto"        // "light" | "dark" | "auto"
  position="bottom"   // "top" | "bottom" | "left" | "right"
  enabled={true}      // Enable/disable the toolbar
/>
```

## Environment Variables

Create a `.env.local` file with these variables:

```bash
# Required for full functionality
NEXT_PUBLIC_STAGEWISE_API_KEY=your_api_key_here

# Optional customization
NEXT_PUBLIC_STAGEWISE_THEME=auto
NEXT_PUBLIC_STAGEWISE_POSITION=bottom
NEXT_PUBLIC_STAGEWISE_ENABLED=true
```

## Demo Mode

Without an API key, the toolbar runs in demo mode with limited functionality. This is perfect for testing and development.

## Development

To start the development server with the Stagewise toolbar:

```bash
npm run dev
```

The toolbar will automatically load and be available at the bottom of the page.

## Troubleshooting

- **Toolbar not showing**: Check browser console for errors
- **Features not working**: Verify your API key is correct
- **Styling issues**: The toolbar automatically adapts to your site's theme

## Security Notes

- Environment files (`.env.local`) are not committed to version control
- Analytics are disabled by default for privacy
- API keys are only used for authentication with Stagewise services 