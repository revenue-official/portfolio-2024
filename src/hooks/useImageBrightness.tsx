import { useState, useEffect } from 'react';

// Fungsi untuk menghitung kecerahan gambar menggunakan rumus luminance
const calculateBrightness = (imageData: ImageData): number => {
    const { data, width, height } = imageData;
    const length = data.length;
    let sumLuminance = 0;

    // Hitung luminance setiap piksel
    for (let i = 0; i < length; i += 4) {
        const r = data[i]; // Nilai merah (red)
        const g = data[i + 1]; // Nilai hijau (green)
        const b = data[i + 2]; // Nilai biru (blue)

        // Rumus luminance (sRGB)
        const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
        sumLuminance += luminance;
    }

    // Hitung rata-rata luminance
    const averageLuminance = sumLuminance / (length / 4);

    return averageLuminance;
};

// Fungsi untuk mengubah nilai kecerahan menjadi kategori sederhana
const getBrightnessCategory = (brightness: number): string => {
    if (brightness < 50) {
        return 'low';
    } else if (brightness < 100) {
        return 'medium';
    } else if (brightness < 150) {
        return 'normal';
    } else if (brightness < 200) {
        return 'high';
    } else {
        return 'highest';
    }
};


const useImageBrightness = (imageSrcs: string[]): (string | null)[] => {
    // State untuk menyimpan kategori kecerahan gambar
    const [brightnessCategories, setBrightnessCategories] = useState<(string | null)[]>([]);

    useEffect(() => {
        // Jika tidak ada gambar untuk diproses, kembalikan nilai default
        if (imageSrcs.length === 0) {
            setBrightnessCategories([]);
            return;
        }

        // Array untuk menyimpan janji (promise) untuk setiap gambar
        const brightnessPromises = imageSrcs.map((src) => {
            return new Promise<string | null>((resolve, reject) => {
                // Membuat objek gambar baru
                const image = new Image();
                // Mengatur `crossOrigin` agar dapat mengambil gambar dari sumber yang berbeda
                image.crossOrigin = 'anonymous';
                image.src = src;

                // Jika gambar dimuat dengan benar
                image.onload = () => {
                    // Membuat elemen canvas untuk mengambil data gambar
                    const canvas = document.createElement('canvas');
                    const context = canvas.getContext('2d');

                    if (!context) {
                        // Jika tidak dapat mendapatkan konteks canvas, laporkan kesalahan
                        reject(new Error('Failed to get canvas context'));
                        return;
                    }

                    // Menyesuaikan ukuran canvas dengan ukuran gambar
                    canvas.width = image.width;
                    canvas.height = image.height;

                    // Menggambar gambar ke canvas
                    context.drawImage(image, 0, 0);

                    // Mengambil data gambar dari canvas
                    const imageData = context.getImageData(0, 0, image.width, image.height);

                    // Menghitung kecerahan gambar
                    const brightness = calculateBrightness(imageData);

                    // Mendapatkan kategori kecerahan
                    const category = getBrightnessCategory(brightness);

                    // Mengembalikan kategori kecerahan
                    resolve(category);
                };

                // Jika terjadi kesalahan saat memuat gambar
                image.onerror = () => {
                    resolve(null);
                };
            });
        });

        // Menjalankan semua janji (promise) untuk menghitung kecerahan gambar
        Promise.all(brightnessPromises)
            .then((categories) => {
                // Mengatur kategori kecerahan dalam state
                setBrightnessCategories(categories);
            })
            .catch((error) => {
                console.error('Error processing images:', error);
                // Jika ada kesalahan, atur semua kategori kecerahan menjadi `null`
                setBrightnessCategories(imageSrcs.map(() => null));
            });

        // Fungsi pembersihan untuk menghindari kebocoran memori
        return () => {
            brightnessPromises.forEach((promise) => {
                promise.catch(() => {
                    // Mengabaikan kesalahan janji (promise)
                });
            });
        };
    }, [imageSrcs]);

    // Mengembalikan array kategori kecerahan gambar
    return brightnessCategories;
};

export default useImageBrightness;
