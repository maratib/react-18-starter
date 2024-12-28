type Props = {
  name?: string;
};

const Header = ({ name = "mak" }: Props) => {
  return (
    <div>
      <h1>Hello 123 {name}</h1>
    </div>
  );
};

export default Header;
