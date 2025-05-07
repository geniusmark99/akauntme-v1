import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Akauntme',
        short_name: 'AkauntMe',
        description: 'Smart bookkeeping made effortless — track sales, expenses, debt, inventory, and more in one powerful app',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        orientation: 'portrait-primary',
        icons: [
            {
                src: '/icons/android-chrome-192x192.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/icons/android-chrome-192x192.png',
                sizes: '512x512',
                type: 'image/png',
            },
            {
                src: '/icons/android-chrome-192x192.png',
                type: 'image/png',
                sizes: '512x512',
                purpose: 'maskable',
            },
        ],
    }
}