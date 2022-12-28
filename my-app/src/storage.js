import { redirect } from "react-router-dom";

export async function submitPage({ request, params }) {
  const formData = Object.fromEntries(await request.formData()); //method transforms a list of key-value pairs into an object.
  const storage = window.localStorage;
  storage.setItem("store", JSON.stringify(formData));
  return redirect(`/ampoule-vertical`);
}

export async function loadValues() {
  const storage = window.localStorage;
  return JSON.parse(storage.getItem("store"));
}
