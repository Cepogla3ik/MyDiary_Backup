import { setSectionsState } from "@client/store/slices";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector, type RootState } from "@client/store/store";
import Header from "./Header/Header";
// import Navigation from "./Navigation/Navigation";
import Main from "./Main/Main";

export default function Index() {
  const state = useAppSelector((state: RootState) => state.app.sections);
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(setSectionsState({ board: true }));
  }, []);

  return (<>
    <Header />
    <Main />
    {/* <Navigation /> */}
  </>
  );
}