//types
import { IIconPropsType } from '../../types';

const PositiveIcon = ({ color, size }: IIconPropsType): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      height={size ? size.height : 40}
      width={size ? size.width : 40}
    >
      <path
        fill={color ? color : 'currentColor'}
        d="M422-297.333 704.667-580l-49.334-48.667L422-395.333l-118-118-48.667 48.666L422-297.333ZM480-80q-82.333 0-155.333-31.5t-127.334-85.833Q143-251.667 111.5-324.667T80-480q0-83 31.5-156t85.833-127q54.334-54 127.334-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82.333-31.5 155.333T763-197.333Q709-143 636-111.5T480-80Zm0-66.666q139.333 0 236.334-97.334 97-97.333 97-236 0-139.333-97-236.334-97.001-97-236.334-97-138.667 0-236 97Q146.666-619.333 146.666-480q0 138.667 97.334 236 97.333 97.334 236 97.334ZM480-480Z"
      />
    </svg>
  );
};

export default PositiveIcon;