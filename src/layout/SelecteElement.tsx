function Img({ src, alt}: { src: string; alt: string }) {
  return (
    <div className="flex justify-between items-center gap-2">
      <img src={src} alt={alt} className="w-9 h-9" />
      <span className="text-sm" style={{
        fontFamily: 'Cairo'
      }}>{alt}</span>
    </div>
  );
}
export default Img;
