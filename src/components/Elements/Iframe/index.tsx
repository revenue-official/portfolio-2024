interface IframeProps {
    src: string,
    title?: string
    className?: string
}

export default function Iframe({ src, className, title }: IframeProps) {
    return (
        <iframe
            className={className}
            src={src ?? "https://www.youtube.com/embed/dQw4w9WgXcQ"}
            title={title ?? "YouTube video player"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        />
    );
}