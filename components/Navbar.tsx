import { faHome, faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-center items-center bg-nav p-4">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <FontAwesomeIcon icon={faHome} className="icon" />
        </Link>
        <Link href="/ticket/create">
          <FontAwesomeIcon icon={faTicket} className="icon" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
