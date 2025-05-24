const baseUrl = import.meta.env.VITE_URL_API_PRINCIPAL_DEV

async function handleResponse(response: any) {
  if (!response.ok) {
    const error = await response.text()
    throw new Error(`Error ${response.status}: ${error}`)
  }
  // Si la respuesta es 204 (No Content), simplemente regresa undefined o true
  if (response.status === 204) {
    return
  }
  return response.json()
}

export default {
  async conseguirTodasRapidas() {
    const response = await fetch(`${baseUrl}/rapidas`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return handleResponse(response)
  },

  async conseguirRapidaPorId(id: any) {
    const response = await fetch(`${baseUrl}/rapida/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return handleResponse(response)
  },

  async crearRapida(data: any) {
    const response = await fetch(`${baseUrl}/rapida`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    return handleResponse(response)
  },

  async actualizarRapida(id: any, data: any) {
    const response = await fetch(`${baseUrl}/rapida/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    return handleResponse(response)
  },

  async eliminarRapida(id: any) {
    const response = await fetch(`${baseUrl}/rapida/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return handleResponse(response)
  },
}