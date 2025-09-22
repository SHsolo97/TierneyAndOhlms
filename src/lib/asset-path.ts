/**
 * Get the correct path for static assets
 * Next.js will automatically handle basePath for us
 */
export function getAssetPath(path: string): string {
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Return the path - Next.js will automatically apply basePath
  return `/${cleanPath}`;
}