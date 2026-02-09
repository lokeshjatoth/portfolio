import Link from "next/link";
import Strings from "@/constants/strings";

const Resume = () => {
  return (
    <Link
      className="app__filled_btn min-w-[10rem]"
      href="/Resume.pdf"
      target="_blank"
    >
      Download Resume
    </Link>
  );
};

export default Resume;
