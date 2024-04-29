import Image from 'next/image';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

// Definisikan tipe data untuk hasil getServerSideProps
type ServerSideProps = {
    imageUrl: string;
};

export const getServerSideProps: GetServerSideProps<ServerSideProps> = async () => {
    // Ambil data gambar dari URL eksternal di sisi server
    const imageUrl = 'https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80';

    // Kembalikan data sebagai props ke komponen
    return {
        props: {
            imageUrl,
        },
    };
};

const SSRImagePage = ({ imageUrl }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return (
        <>
            <Image
                src={imageUrl}
                width={144}
                height={144}
                alt="Project"
                className="w-64 h-32 flex-shrink-0 aspect-video object-cover rounded-sm shadow-md group-hover:scale-95 duration-500 ease-in-out"
                loading="lazy"
            />
        </>
    );
};

export default SSRImagePage;
