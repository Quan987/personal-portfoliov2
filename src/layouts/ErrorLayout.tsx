import Navbutton from "@/components/ui/Navbutton";

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
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-8xl font-bold text-foreground-gray">{statusCode}</h1>

      <div className="flex flex-col gap-3 mt-5">
        <p className="text-xl text-foreground-primary">{title}</p>
        <p className="text-md text-foreground-muted">{message}</p>
      </div>

      <Navbutton
        link="/"
        className="hover-tilt hover:-translate-y-1 hover:translate-x-1 mt-10 px-10 py-3 text-md"
      >
        Go Back Home
      </Navbutton>
    </div>
  );
}
