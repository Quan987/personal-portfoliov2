export default function Footer() {
  return (
    <footer className="flex justify-center items-center py-1 select-none pointer-events-none">
      <small>
        &copy; {new Date().getFullYear()} Quan Tran - All Rights Reserved
      </small>
    </footer>
  );
}
