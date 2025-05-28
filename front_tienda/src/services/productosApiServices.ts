const API_URL = import.meta.env.VITE_URL_API_PRINCIPAL_DEV;

async function handleResponse(response: Response) {
  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Error ${response.status}: ${error}`);
  }
  if (response.status === 204) return;
  return response.json();
}

const apiService = {
  async getProductos() {
    const res = await fetch(`${API_URL}/productos`);
    return handleResponse(res);
  },

  async getProductoById(id: string) {
    const res = await fetch(`${API_URL}/producto/${id}`);
    return handleResponse(res);
  },

  async createProducto(producto: any) {
    const res = await fetch(`${API_URL}/producto`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(producto),
    });
    return handleResponse(res);
  },

  async updateProducto(id: string, producto: any) {
    const res = await fetch(`${API_URL}/producto/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(producto),
    });
    return handleResponse(res);
  },

  async deleteProducto(id: string) {
    const res = await fetch(`${API_URL}/producto/${id}`, {
      method: 'DELETE',
    });
    return handleResponse(res);
  },
};



export default apiService;
