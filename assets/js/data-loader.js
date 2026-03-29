export async function loadDisposalItems() {
  const dataUrl = new URL("../data/disposal-items.json", import.meta.url);
  const response = await fetch(dataUrl);

  if (!response.ok) {
    throw new Error(`Unable to load disposal items: ${response.status}`);
  }

  return response.json();
}
