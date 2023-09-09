import {
  createContext,
  useEffect,
  useContext,
  useReducer,
  useCallback,
} from "react";

import {
  deleteCityRow,
  fetchCity,
  getCities,
  insertCityRow,
} from "../utils/citiesUtils";
import { useAuth } from "./AuthContext";

const CitiesContext = createContext();

const initialState = {
  cities: [],
  isLoading: false,
  currentCity: {},
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };

    case "cities/loaded":
      return { ...state, isLoading: false, cities: action.payload };

    case "city/loaded":
      return { ...state, isLoading: false, currentCity: action.payload };

    case "city/created":
      return {
        ...state,
        isLoading: false,
        cities: [...state.cities, action.payload],
        currentCity: action.payload,
      };

    case "city/deleted":
      return {
        ...state,
        isLoading: false,
        cities: state.cities.filter((city) => city.id !== action.payload),
        currentCity: {},
      };

    case "rejected":
      return { ...state, isLoading: false, error: action.payload };

    case "reset":
      return initialState;

    default:
      throw new Error("Unknown action type");
  }
}

function CitiesProvider({ children }) {
  const { isAuthenticated } = useAuth();
  const [{ cities, isLoading, currentCity, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(
    function () {
      if (isAuthenticated) {
        async function fetchCities() {
          dispatch({ type: "loading" });
          try {
            let { cities, error } = await getCities();

            if (!error) {
              dispatch({
                type: "cities/loaded",
                payload: cities,
              });
            }
          } catch {
            dispatch({
              type: "rejected",
              payload: "There was an error loading the cities",
            });
          }
        }
        fetchCities();
      }
    },
    [isAuthenticated]
  );

  const getCity = useCallback(
    async function getCity(id) {
      if (Number(id) === currentCity.id) return;

      dispatch({ type: "loading" });
      try {
        const { city } = await fetchCity(id);

        dispatch({ type: "city/loaded", payload: city.at(0) });
      } catch (error) {
        dispatch({
          type: "rejected",
          payload: "There was an error loading the city",
        });
      }
    },
    [currentCity.id]
  );

  async function createCity(newCity) {
    dispatch({ type: "loading" });
    try {
      const { data, error } = await insertCityRow(newCity);

      if (!error) {
        dispatch({
          type: "city/created",
          payload: data.at(0),
        });
      }
    } catch (error) {
      dispatch({
        type: "rejected",
        payload: "There was an error creating city",
      });
    }
  }

  async function deleteCity(id) {
    dispatch({ type: "loading" });
    try {
      await deleteCityRow(id);

      dispatch({
        type: "city/deleted",
        payload: id,
      });
      console.log("city deleted");
    } catch (error) {
      console.log(error);
      dispatch({
        type: "rejected",
        payload: "There was an error deleting city",
      });
    }
  }

  async function resetCities() {
    dispatch({ type: "reset" });
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        getCity,
        createCity,
        deleteCity,
        resetCities,
        error,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("CitiesContext was used outside the CitiesProvider");

  return context;
}

export { CitiesProvider, useCities };
