import { Link } from '~/components/shared/Link';
import { SubMenuItem } from "../types";

interface SubMenuProps {
    subMenu: SubMenuItem[];
    onMouseLeave: () => void;
}

function SubMenuSingle({ subMenu, onMouseLeave }: SubMenuProps) {
    const section = subMenu[0]; // We know there's only one section

    return (
        <div
            className="absolute min-w-[200px] bg-white border border-gray-200 shadow-lg z-20 top-full"
            onMouseLeave={onMouseLeave}
        >
            <div className="p-4">
                <div className="space-y-3">
                    <h3 className="text-base font-semibold text-gray-800 mb-3">
                        {section.title}
                    </h3>
                    <ul className="space-y-2">
                        {section.links.map((link, linkIndex) => (
                            <li key={linkIndex}>
                                <Link
                                    to={`/page-in-development`}
                                    className="text-sm text-gray-600 hover:text-gray-800 hover:underline transition-colors block whitespace-nowrap"
                                >
                                    {link}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SubMenuSingle;