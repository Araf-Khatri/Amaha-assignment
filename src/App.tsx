import { useState } from "react";
import Navbar from "./Layout/navbar";
import Section from "./Components/section";
import Searchbar from "./Components/searchbar";
import Articles from "./Layout/articles";
import PopupWindow from "./Layout/popup-window";
import { PopupData } from "./Types/popup-data";

type PopupStateData = { windowOpen: boolean; data: PopupData };

const initialData = { image: "", title: "", body: "" };

function App() {
  const [searchData, setSearchData] = useState<string>("");
  const [popupState, setPopupState] = useState<PopupStateData>({
    windowOpen: false,
    data: initialData,
  });
  const closePopupWindowHandler = () => {
    setPopupState({ windowOpen: false, data: initialData });
  };

  const openPopupWindowHandler = (data: PopupData) => {
    setPopupState({ windowOpen: true, data });
  };

  return (
    <main className="bg-app text-xl font-quicksand">
      <Navbar />
      <Section>
        <div className="flex flex-col md:flex-row justify-between md:items-center py-10">
          {!searchData.length && (
            <p className="text-2xl font-semibold">All articles</p>
          )}
          <Searchbar setSearchData={(data: string) => setSearchData(data)} />
        </div>
        <div className="flex flex-col gap-10">
          {!!searchData.length && (
            <p className="text-2xl font-semibold">{`Search results for: ${searchData}`}</p>
          )}
          <Articles filter={searchData} openpopup={openPopupWindowHandler} />
        </div>
      </Section>
      {popupState.windowOpen && (
        <PopupWindow
          title={popupState.data.title}
          image={popupState.data.image}
          body={popupState.data.body}
          onCloseHandler={closePopupWindowHandler}
        />
      )}
    </main>
    // <div>
  );
}

export default App;
