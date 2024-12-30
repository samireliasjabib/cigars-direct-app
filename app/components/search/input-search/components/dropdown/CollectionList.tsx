export interface Collection {
  id: string;
  name: string;
}

function CollectionList({collections}: {collections: Collection[]}) {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Collections</h2>
      <ul className="space-y-2">
        {collections.map((collection) => (
          <li
            key={collection.id}
            className="hover:underline cursor-pointer text-gray-800"
          >
            {collection.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CollectionList;
