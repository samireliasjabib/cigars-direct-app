export interface Collection {
  id: string;
  name: string;
}

function CollectionList({collections}: {collections: Collection[]}) {
  return (
    <div>
      <div className="bg-gray-100 rounded-tl-md">
        <h2 className="text-sm font-normal uppercase px-2 py-1 text-black/50">
          Collections
        </h2>
      </div>
      <ul>
        {collections.map((collection) => (
          <li
            key={collection.id}
            className="hover:bg-gray-100 cursor-pointer text-gray-800 py-1 text-sm px-2"
          >
            <span className="">{collection.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CollectionList;
