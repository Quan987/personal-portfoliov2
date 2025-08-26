import { getCurrentYear } from "@/utils/date-utils";

export default function Footer() {
  return (
    <footer className="flex-center no-interact text-muted-text text-[clamp(0.75rem,0.85vw,1.25rem)]">
      <small>&copy; {getCurrentYear()} Quan Tran - All Rights Reserved</small>
    </footer>
  );
}
