import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faMoon } from "@fortawesome/free-regular-svg-icons";
import { useAppSelector, useAppDispatch } from "../../../../redux/hook";
import { toggleMode, selectMode } from "../../../../redux/slices/darkModeSlice";

function index() {
  const dispatch = useAppDispatch();
  const isDarkMode = useAppSelector(selectMode);

  return isDarkMode ? (
    <FontAwesomeIcon
      className="cursor-pointer"
      onClick={() => dispatch(toggleMode(false))}
      icon={faLightbulb}
    />
  ) : (
    <FontAwesomeIcon
      className="cursor-pointer"
      icon={faMoon}
      onClick={() => dispatch(toggleMode(true))}
    />
  );
}

export default index;
