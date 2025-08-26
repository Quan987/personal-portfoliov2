type ErrorLayoutProps = {
  statusCode: string;
  title: string;
  message: string;
};

export default function ErrorLayout({
  statusCode,
  title,
  message,
}: ErrorLayoutProps) {
  return (
    <div className="flex-col-center min-h-screen text-center leading-none gap-[clamp(1rem,calc(2vw_-_1.5rem),2.5rem)]">
      <h1 className="font-bold text-gray text-[clamp(3rem,3vw,7rem)]">
        {statusCode}
      </h1>

      <p className=" text-primary text-[clamp(1.25rem,1.5vw,3rem)]">{title}</p>
      <p className=" text-muted-text leading-normal text-[clamp(0.875rem,1vw,1.875rem)] px-[clamp(3rem,5vw,2.5rem)]">
        {message}
      </p>
      <button
        type="button"
        onClick={() => (window.location.href = "/")}
        className="btn-primary hover-tilt text-[clamp(0.875rem,0.85vw,6rem)] px-[clamp(1.25rem,1.25vw,3rem)] py-[clamp(0.75rem,0.85vw,1.5rem)]"
      >
        Go Back Home
      </button>
    </div>
  );
}
