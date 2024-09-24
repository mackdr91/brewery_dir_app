import Link from "next/link";
const Button = ({ children, link, className }) => {
  return (
    <Link href={link}
    className={className}>
    <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
      {children}
    </button>
    </Link>
  );
};

export default Button;
