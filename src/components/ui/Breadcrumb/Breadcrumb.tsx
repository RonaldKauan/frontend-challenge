import { Link } from "react-router";
import RightArrowIcon from "../../../assets/right-arrow-icon.svg";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav>
      <ol className="flex items-center gap-2">
        {items.map((item, index) => (
          <li className="flex items-center gap-2" key={index}>
            {item.href ? (
              <Link
                className="font-medium text-[10px] text-[#0B2B25]"
                to={item.href}
              >
                {item.label}
              </Link>
            ) : (
              <span className="font-medium text-[10px] text-[#0B2B25]">
                {item.label}
              </span>
            )}

            {index !== items.length - 1 && (
              <span>
                <RightArrowIcon className="rotate-180" />
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
