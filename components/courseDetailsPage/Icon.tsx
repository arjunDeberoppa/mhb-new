import IcoMoon, { IconProps } from "react-icomoon";
import iconSet from "./icons.json";

const Icon = (props: IconProps) => <IcoMoon iconSet={iconSet} {...props} />;

export default Icon;
