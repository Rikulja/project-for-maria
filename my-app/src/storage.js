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
  if (params.direction === "vertical") {
    return redirect(`/ampoule/horizontal`);
  }
  return redirect(`/ampoule-types`);
}

export async function submitTypes({ request, params }) {
  const formData = Object.fromEntries(await request.formData());
  const values = await loadValues();
  values.types = {
    typeA: parseInt(formData.typeA, 10) || 0,
    typeB: parseInt(formData.typeB, 10) || 0,
    typeC: parseInt(formData.typeC, 10) || 0,
    other: parseInt(formData.other, 10) || 0,
  };
  await saveValues(values);
  return redirect(`/decision`);
}
