import { redirect } from "react-router-dom";

let store = {};
export async function submitPage({ request, params }) {
  const formData = Object.fromEntries(await request.formData()); //method transforms a list of key-value pairs into an object.
  store = formData;
  console.log(formData);
  return redirect(`/temporary`);
}

export async function loadValues() {
  return store;
}
