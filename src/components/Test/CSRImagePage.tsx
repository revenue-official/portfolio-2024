import { useEffect, useState } from 'react';
import Image from 'next/image';

function CSRImagePage() {
    const [imageUrl, setImageUrl] = useState<string | null>(null);

    useEffect(() => {
        // Simulasikan pengambilan data gambar dari URL
        const fetchImageUrl = async () => {
            // Dalam kasus ini, Anda bisa langsung mengatur URL gambar
            const imageUrl = 'https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80';
            setImageUrl(imageUrl);
        };

        fetchImageUrl();
    }, []);

    return (
        <>
            {imageUrl ? (
                <Image
                    src={imageUrl}
                    width={144}
                    height={144}
                    alt="Project"
                    className="w-64 h-32 flex-shrink-0 aspect-video object-cover rounded-sm shadow-md group-hover:scale-95 duration-500 ease-in-out"
                    loading="lazy"
                />
            ) : (
                <p>Loading...</p>
            )}
        </>
    );
}

export default CSRImagePage;
