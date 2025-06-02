const links = ["Home", "About", "Project", "Contact"];

export default function Footer() {
  return (
    <footer
      className={
        "relative font-medium w-full bottom-0 inset-x-0 bg-tangerine shadow-md mt-35 px-10 py-5"
      }
    >
      <div className={"flex justify-between items-center"}>
        <ul className={"flex gap-5"}>
          {links.map((link, index) => (
            <li key={`${index}-${link}`}>
              <a href={`#${link.toLowerCase()}`} rel="noopener noreferrer">
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div>Copyright &copy; 2025 &mdash; All rights reserved</div>

        <div>Designed and built by Quan Tran.</div>
      </div>
    </footer>
  );
}
