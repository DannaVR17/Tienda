const baseUrl = import.meta.env.VITE_URL_API_PRINCIPAL_DEV

async function handleResponse(response: any) {
  if (!response.ok) {
    const error = await response.text()
    throw new Error(`Error ${response.status}: ${error}`)
  }
  return response.json()
}

export default {
  async getAllBebida() {
    console.log('URL de la API:', baseUrl)

    const response = await fetch(`${baseUrl}/bebidas`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return handleResponse(response)
  },

  async getBebidaById(id: any) {
    const response = await fetch(`${baseUrl}/bebida/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return handleResponse(response)
  },

  async createBebida(data: any) {
    const response = await fetch(`${baseUrl}/bebida`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    return handleResponse(response)
  },

  async updateBebida(id: any, data: any) {
    const response = await fetch(`${baseUrl}/bebida/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    return handleResponse(response)
  },

  async deleteBebida(id: any) {
    const response = await fetch(`${baseUrl}/bebida/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return handleResponse(response)
  },
}
