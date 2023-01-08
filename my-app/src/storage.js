import { useEffect } from "react";
import {
  redirect,
  useLoaderData,
  useLocation,
  useNavigate,
} from "react-router-dom";

async function saveValues(values) {
  const storage = window.localStorage;
  storage.setItem("store", JSON.stringify(values));
}

export async function submitPage({ request, params }) {
  const formData = Object.fromEntries(await request.formData()); //method transforms a list of key-value pairs into an object.
  const values = await loadValues();
  values.currentPage = "/ampoule/vertical";
  values.current = formData;

  await saveValues(values);
  return redirect(`/ampoule/vertical`);
}

export async function loadValues() {
  const storage = window.localStorage;
  const values = JSON.parse(storage.getItem("store"));
  return values || {}; // Return parsed values or default to an empty object if no values exist
}

export async function startCountdown({ params }) {
  const values = await loadValues();
  const start = Date.now();
  values.startTime = start;
  values.currentPage = `/countdown/${params.direction}`;
  await saveValues(values);
  return redirect(values.currentPage);
}

export async function nextDirection({ params }) {
  const isVertical = params.direction === "vertical";
  const values = await loadValues();

  values.currentPage = isVertical ? `/ampoule/horizontal` : `/ampoule-types`;
  if (!isVertical) {
    if (!values.ampoules) {
      values.ampoules = [];
    }
    values.ampoules = [...values.ampoules, values.current];
    values.current = null;
  }
  console.log("kak", values);
  await saveValues(values);
  return redirect(values.currentPage);
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
  values.currentPage = `/decision`;
  await saveValues(values);
  return redirect(`/decision`);
}

export async function submitDecision({ request }) {
  const formData = Object.fromEntries(await request.formData());
  const isNewAmpoule = "new" in formData;
  const values = await loadValues();
  values.currentPage = `/`;
  await saveValues(values);
  return redirect(isNewAmpoule ? `/` : `/formula`);
}

export function useFormula() {
  const values = useLoaderData();
  if (!values.types) {
    return {};
  }
  const { typeA, typeB, typeC, other } = values.types;
  const sum = typeA + typeB + typeC + other;
  const percentage = (100 * (typeB + typeC + other)) / typeA;
  const result = percentage <= 10;
  return {
    sum,
    percentage,
    result,
    resultText: result ? "OK" : "NOK",
  };
}

export function useRedirectIfNecessary() {
  const values = useLoaderData();
  const currentPath = useLocation().pathname;
  const navigate = useNavigate();
  const currentPage = values.currentPage || "/"; // Default to / if no page is stored.

  useEffect(() => {
    if (currentPage !== currentPath) {
      navigate(currentPage);
    }
  }, [currentPage, currentPath, navigate]);
}
