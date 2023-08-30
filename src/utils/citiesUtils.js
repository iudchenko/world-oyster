import { supabase } from "../services/supabase";

export async function getCities() {
  let { data: cities, error } = await supabase.from("cities").select("*");

  return { cities, error };
}

export async function fetchCity(id) {
  let { data: city, error } = await supabase
    .from("cities")
    .select("*")
    .eq("id", id);

  return { city, error };
}

export async function insertCityRow(newCity) {
  console.log(newCity);
  const { data, error } = await supabase
    .from("cities")
    .insert([newCity])
    .select();

  return { data, error };
}

export async function deleteCityRow(id) {
  const { error } = await supabase.from("cities").delete().eq("id", id);

  return error;
}
