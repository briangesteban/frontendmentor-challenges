import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { RootState } from "../../utils/redux/state/store";
import "./TechnologyPage.scss";

const TechnologyPage = () => {
  const currPathState: string = useSelector(
    (state: RootState) => state.currentPath.value
  );
  const [classModifier, setClassModifier] = useState<string>("--destination");

  useEffect(() => {
    if (currPathState === "/destination") {
      setClassModifier("--destination");
    } else if (currPathState === "/crew") {
      setClassModifier("--crew");
    } else if (currPathState === "/technology") {
      setClassModifier("--technology");
    }
  }, []);

  if (currPathState)
    return <main className={`content content${classModifier}`}></main>;
};

export { TechnologyPage };
