const API_URL = import.meta.env.VITE_API_LIMPIEZA_URL || 'http://localhost:3000';

export async function getProductos() {
  const res = await fetch(`${API_URL}/productos`);
  return res.json();
}

export async function getProducto(id: string) {
  const res = await fetch(`${API_URL}/producto/${id}`);
  return res.json();
}

export async function createProducto(producto: any) {
  const res = await fetch(`${API_URL}/producto`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(producto),
  });
  return res.json();
}

export async function updateProducto(id: string, producto: any) {
  const res = await fetch(`${API_URL}/producto/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(producto),
  });
  return res.json();
}

export async function deleteProducto(id: string) {
  const res = await fetch(`${API_URL}/producto/${id}`, {
    method: 'DELETE',
  });
  return res.json();
}
