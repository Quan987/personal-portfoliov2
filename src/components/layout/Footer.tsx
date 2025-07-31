import { getCurrentYear } from "@/utils/get-current-year";

export default function Footer() {
  return (
    <footer className="flex justify-center items-center py-1 select-none pointer-events-none text-foreground-muted">
      <small>&copy; {getCurrentYear()} Quan Tran - All Rights Reserved</small>
    </footer>
  );
}
