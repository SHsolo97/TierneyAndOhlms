/**
 * Get the correct path for static assets based on the environment
 * This handles the basePath for GitHub Pages deployment
 */

// Get the base path from Next.js config or environment
const basePath = process.env.NODE_ENV === 'production' && process.env.GITHUB_PAGES 
  ? '/TierneyAndOhlms' 
  : '';

export function getAssetPath(path: string): string {
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Return the path with basePath prefix for production GitHub Pages
  return basePath ? `${basePath}/${cleanPath}` : `/${cleanPath}`;
}

export { basePath };