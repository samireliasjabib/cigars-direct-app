export interface Page {
  id: string;
  title: string;
}

function PageList({pages}: {pages: Page[]}) {
  return (
    <div>
      <div className="bg-gray-100">
        <h2 className="text-sm font-normal uppercase px-2 py-1 text-black/50">
          Pages
        </h2>
      </div>
      <ul>
        {pages.map((page) => (
          <li
            key={page.id}
            className="hover:bg-gray-100 cursor-pointer text-gray-800 py-1 text-sm px-2"
          >
            <span>{page.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PageList;
