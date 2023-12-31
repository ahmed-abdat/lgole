function Img({ src, alt}: { src: string; alt: string }) {
  return (
    <div className="flex justify-between items-center gap-2">
      <img src={src} alt={alt} className="w-10 h-10" />
      <span className="text-base" style={{
        fontFamily: 'Cairo'
      }}>{alt}</span>
    </div>
  );
}
export default Img;
