import { redirect } from "react-router-dom";

async function saveValues(values) {
  const storage = window.localStorage;
  storage.setItem("store", JSON.stringify(values));
}

export async function submitPage({ request, params }) {
  const formData = Object.fromEntries(await request.formData()); //method transforms a list of key-value pairs into an object.
  await saveValues(formData);
  return redirect(`/ampoule/vertical`);
}

export async function loadValues() {
  const storage = window.localStorage;
  return JSON.parse(storage.getItem("store"));
}

export async function startCountdown({ params }) {
  const values = await loadValues();
  const start = Date.now();
  values.startTime = start;
  await saveValues(values);
  return redirect(`/countdown/${params.direction}`);
}

export async function nextDirection({ params }) {
  const values = await loadValues();
  values[params.direction] = true;
  await saveValues(values);
  return redirect(`/ampoule/horizontal`);
}
