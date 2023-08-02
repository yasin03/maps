import Text from "./variants/Text";

interface Props {}

const Button = (props: Props) => {
  return <div className="bg-red-200">MyButton</div>;
};

Button.Text = Text;

export default Button;
