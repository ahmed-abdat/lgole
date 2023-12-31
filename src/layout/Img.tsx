function Img({ src, alt }: { src: string, alt: string }) {
    return (
        <img
            src={src}
            alt={alt}
            className="w-5 h-5"
        />
    );
}
export default Img;
