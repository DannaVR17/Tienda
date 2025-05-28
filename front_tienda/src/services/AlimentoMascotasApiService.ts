const baseUrl = import.meta.env.VITE_URL_API_PRINCIPAL_DEV

async function handleResponse(response: any) {
  if (!response.ok) {
    const error = await response.text()
    throw new Error(`Error ${response.status}: ${error}`)
  }
  return response.json()
}

export default {
  async getAlimentos() {
    console.log('URL de la API:', baseUrl)

    const response = await fetch(`${baseUrl}/alimentos`, { // ← Aquí estaba el error
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return handleResponse(response)
  },

  async getAlimentosById(id: any) {
    const response = await fetch(`${baseUrl}/alimento/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return handleResponse(response)
  },

  async createAlimento(data: any) {
    const response = await fetch(`${baseUrl}/alimento`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    return handleResponse(response)
  },

  async updateAlimentos(id: any, data: any) {
    const response = await fetch(`${baseUrl}/alimento/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    return handleResponse(response)
  },

  async deleteAlimentos(id: any) {
    const response = await fetch(`${baseUrl}/alimento/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return handleResponse(response)
  },
}
