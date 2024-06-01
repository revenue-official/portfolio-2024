interface VideoProps {
  src: string;
  width?: number;
  height?: number;
  className?: string;
}
export function Video({ src, width, height, className }: VideoProps) {
  return (
    <video
      width={width ?? 320}
      height={height ?? 240}
      controls
      preload="none"
      className={className}
    >
      <source src={src ?? ''} type="video/mp4" />
      <track src={src ?? ''} kind="captions" srcLang="en" label="English" />
      Your browser does not support the video tag.
    </video>
  );
}
