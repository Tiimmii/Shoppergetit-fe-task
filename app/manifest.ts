import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return (
        {
            "name": "Shoppergetit Fe-Task",
            "short_name": "ShoppergetitApp Fe-Task",
            "start_url": "/",
            "display": "standalone",
            "background_color": "#ffffff",
            "theme_color": "#428BC1",
            "description": "AShopperget Ecommerce web application ",
            "icons": [
                {
                    "src": "/icons/icon-192x192.png",
                    "type": "image/png",
                    "sizes": "192x192"
                },
                {
                    "src": "/icons/icon-512x512.png",
                    "type": "image/png",
                    "sizes": "512x512"
                }
            ]
        }
    )
}
