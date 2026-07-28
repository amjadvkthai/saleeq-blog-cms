/**
 * My SonicJS Application
 *
 * Entry point for your SonicJS headless CMS application.
 * The example plugin is included to demonstrate how plugins work —
 * feel free to remove it or use it as a starting point for your own.
 */

import { createSonicJSApp, registerCollections } from '@sonicjs-cms/core'
import type { SonicJSConfig } from '@sonicjs-cms/core'

// Import your collection configurations
// Add new collections here after creating them in src/collections/

// Register collections BEFORE creating the app.
registerCollections([
  // Add collections here as you create them
])

// Application configuration
const config: SonicJSConfig = {
  plugins: {
    register: [
      // Add your own plugins here
    ],
  },
}

// Create and export the application
export default createSonicJSApp(config)
