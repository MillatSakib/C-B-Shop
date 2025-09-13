function CardReducer(state, action) {
  switch (action.type) {
    case "popularSort":
      return state.toSorted((a, b) => b.rating - a.rating);
    case "newest":
      return state.toSorted((a, b) => b.id - a.id);
    case "priceAsc":
      return state.toSorted((a, b) => a.price - b.price);
    case "priceDsc":
      return state.toSorted((a, b) => b.price - a.price);
    case "default":
      return state.toSorted((a, b) => a.id - b.id);
    case "na":
      return state.toSorted((a, b) => a.id - b.id);
    default:
      throw new Error("Unknown action: " + action.type);
  }
}

export default CardReducer;
