function Img({ src, alt }: { src: string, alt: string }) {
    return (
        <img
            src={src}
            alt={alt}
            className="w-8 h-8 rounded-full"
        />
    );
}
export default Img;
