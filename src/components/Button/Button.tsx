import { MaterialButtonProps, buttonStyles } from "@/utils/definitions";

const MaterialButton: React.FC<MaterialButtonProps> = ({
  children,
  type = "default",
  onClick,
  className
}) => {
  const buttonClass = `font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex gap-2 justify-center ${buttonStyles[type]} ${className || ''}`;

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default MaterialButton;
