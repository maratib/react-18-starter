import { ModeToggle } from "@/components/site/ModeToggle";
import { Button } from "@/components/ui/button";

type Props = {
  name?: string;
};

const Header = ({ name = "mak" }: Props) => {
  return (
    <div>
      <h1>Hello 123 {name}</h1>
      <ModeToggle />
      <Button>Click It</Button>
    </div>
  );
};

export default Header;
