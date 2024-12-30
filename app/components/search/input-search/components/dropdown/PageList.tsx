export interface Page {
  id: string;
  title: string;
}

function PageList({pages}: {pages: Page[]}) {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Pages</h2>
      <ul className="space-y-2">
        {pages.map((page) => (
          <li
            key={page.id}
            className="hover:underline cursor-pointer text-gray-800"
          >
            {page.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PageList;
