// Seleciona os elementos do formulário.
const amount = document.getElementById("amount")

// Captura o evento de input para formatar o valor.
amount.oninput = () => {
  // Obtem o valor atual do input e remove os caracteres não numéricos.
  let value = amount.value.replace(/\D/g, "")

  // Transforma o valor em centavos. (ex: 150/100 = 1.50 que é equivalente a R$1,50)
  value = Number(value / 100)

  amount.value = formatCurrencyBRL(value) //recebe o valor do input formatado.
}

function formatCurrencyBRL(value) {
  value = value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
  // Retorna o valor formatado
  return value
}