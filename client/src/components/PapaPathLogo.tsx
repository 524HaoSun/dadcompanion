type PapaPathMarkProps = {
  className?: string;
};

const papapathMarkSrc = `${import.meta.env.BASE_URL}assets/papapath-mark.png`;

export function PapaPathMark({ className = "h-10 w-10" }: PapaPathMarkProps) {
  return (
    <img
      src={papapathMarkSrc}
      alt="PapaPath"
      className={`object-contain ${className}`}
      draggable={false}
    />
  );
}
