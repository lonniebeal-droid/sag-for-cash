export const dynamic = 'force-static';
import type { MetadataRoute } from 'next';
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Sag for Cash', short_name: 'Sag4Cash', description: '18+ streetwear creator marketplace',
    start_url: '/', display: 'standalone', background_color: '#09090b', theme_color: '#bef264',
    icons: [{ src: '/icon.svg', sizes: 'any', type: 'image/svg+xml' }]
  };
}
