interface HorizontalLineProps {
  lineWidth: string;
}

export default function HorizontalLine({ lineWidth }: HorizontalLineProps) {
  return (
    <hr
      className={`${lineWidth}  border-1 border-black rounded-3xl pointer-events-none select-none`}
    />
  );
}
