export const initialState = {
  searchResult: "",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SEARCH_TEXT":
      return {
        ...state,
        searchText: action.item.text,
        searchBtnCount: action.item.btnCounter,
      };
    default:
      return state;
  }
};

export default reducer;
