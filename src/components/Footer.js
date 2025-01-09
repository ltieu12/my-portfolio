import { ContactLink } from "./ContactLink";

export default function Footer() {
  return (
    <footer className="mt-auto">
      <div className="border-b-4 border-black"></div>
      <div className="container h-36 mx-auto px-8 lg:px-0 py-10 md:py-6 flex flex-row justify-between md:items-center">

        {/* Desktop Footer */}
        <div className="hidden md:contents">
          <div>&copy; 2024 Lam Tieu</div>
          <ul className="flex flex-row space-x-8">
            <li>
              <a href="/" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="/projects" className="hover:underline">
                Projects
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
          <ul className="flex flex-row space-x-8">
            <li>
              <ContactLink src={"Gmail"} />
            </li>
            <li>
              <ContactLink src={"LinkedIn"} />
            </li>
            <li>
              <ContactLink src={"Instagram"} />
            </li>
          </ul>
        </div>
      
      {/* Mobile Footer */}
        <div className="md:hidden contents">
          <div className="text-left space-y-3">
            <div>&copy; 2025 Lam Tieu</div>
            <ul className="flex flex-row space-x-2">
              <li>
                <ContactLink src={"Gmail"} />
              </li>
              <li>
                <ContactLink src={"LinkedIn"} />
              </li>
              <li>
                <ContactLink src={"GitHub"} />
              </li>
            </ul>
          </div>

          <ul className="space-y-1 text-left">
            <li>
              <a href="/" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="/projects" className="hover:underline">
                Projects
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

      </div>
    </footer>
  );
}
