export async function loadCatalog() {
  const dataUrl = new URL("../data/disposal-items.json", import.meta.url);
  const response = await fetch(dataUrl);

  if (!response.ok) {
    throw new Error(`Unable to load disposal catalog: ${response.status}`);
  }

  return response.json();
}

export async function loadDisposalItems() {
  const catalog = await loadCatalog();
  return catalog.items;
}
