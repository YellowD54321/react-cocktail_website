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
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "COCKTAIL_INFO":
      return {
        ...state,
        cocktailInfo: action.item.cocktailInfo,
      };
    default:
      return state;
  }
};

export default reducer;
