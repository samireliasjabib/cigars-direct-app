import ActionButton from '~/components/shared/ActionButton';

function ProductActionButtons({
  buttons,
}: {
  buttons: {
    icon: JSX.Element;
    onClick: (e: React.MouseEvent) => void;
  }[];
}) {
  return (
    <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-out z-30">
      {buttons.map((button, index) => (
        <ActionButton
          key={index}
          onClick={button.onClick}
          className="bg-primary p-2 rounded-full shadow-md hover:bg-primary/90 transform transition-transform duration-300 hover:scale-110"
        >
          {button.icon}
        </ActionButton>
      ))}
    </div>
  );
}

export default ProductActionButtons;
