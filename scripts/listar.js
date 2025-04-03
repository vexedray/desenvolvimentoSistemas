document.addEventListener("DOMContentLoaded", function () {
    let budget = 0;
    let totalCost = 0;

    const budgetInput = document.getElementById("budget");
    const productNameInput = document.getElementById("productName");
    const unitPriceInput = document.getElementById("unitPrice");
    const quantityInput = document.getElementById("quantity");
    const addItemButton = document.getElementById("addItem");

    const totalCostDisplay = document.getElementById("totalCost");
    const remainingBudgetDisplay = document.getElementById("remainingBudget");
    const shoppingList = document.getElementById("shoppingList");

    // Definir orçamento
    function definirOrcamento() {
        budget = parseFloat(budgetInput.value) || 0;
        atualizarOrcamento();
    }

    // Adicionar item
    function adicionarItem() {
        limparAlertas();

        const nomeProduto = productNameInput.value.trim();
        const precoUnitario = parseFloat(unitPriceInput.value) || 0;
        const quantidade = parseInt(quantityInput.value) || 0;
        const totalItem = precoUnitario * quantidade;

        if (!nomeProduto || precoUnitario <= 0 || quantidade <= 0) {
            exibirAlerta("Preencha todos os campos corretamente.");
            return;
        }

        if (totalCost + totalItem > budget) {
            exibirAlerta(`Orçamento insuficiente!`);
            return;
        }

        adicionarLinhaTabela(nomeProduto, precoUnitario, quantidade, totalItem);
        atualizarTotalCompra(totalItem);
        limparCampos();
    }

    // Adicionar linha na tabela
    function adicionarLinhaTabela(nome, preco, quantidade, total) {
        const novaLinha = document.createElement("tr");

        novaLinha.innerHTML = `
            <td>${nome}</td>
            <td>R$${preco.toFixed(2)}</td>
            <td>${quantidade}</td>
            <td>R$${total.toFixed(2)}</td>
        `;

        shoppingList.appendChild(novaLinha);
    }

    // Atualizar total da compra
    function atualizarTotalCompra(valor) {
        totalCost += valor;
        atualizarOrcamento();
    }

    // Atualizar exibição do orçamento
    function atualizarOrcamento() {
        totalCostDisplay.textContent = `${totalCost.toFixed(2)} R$`;
        remainingBudgetDisplay.textContent = `${(budget - totalCost).toFixed(2)} R$`;

        totalCostDisplay.classList.remove("text-warning", "text-danger");
        remainingBudgetDisplay.classList.remove("text-warning", "text-danger");

        // Alerta quando atingir 90% do orçamento
        if (totalCost >= budget) {
            totalCostDisplay.classList.add("text-danger");
            remainingBudgetDisplay.classList.add("text-danger");
        } else if (totalCost >= budget * 0.9 && totalCost < budget) {
            totalCostDisplay.classList.add("text-warning");
            remainingBudgetDisplay.classList.add("text-warning");
            if (!document.querySelector(".alert-warning")) {
                exibirAlerta("Você está perto de atingir o limite do orçamento!", "warning");
            }
        }
    }

    // Exibir alertas de erro
    function exibirAlerta(mensagem, tipo = "danger") {
        const alerta = document.createElement("div");
        alerta.className = `alert alert-${tipo}`;
        alerta.role = "alert";
        alerta.innerHTML = `
            ${mensagem}
            <button type="button" class="btn-close" aria-label="Close"></button>
        `;

        // Adiciona o alerta na parte superior do container
        document.querySelector(".container").prepend(alerta);

        // Adiciona o evento de clique para remover o alerta ao clicar no "X"
        alerta.querySelector(".btn-close").addEventListener("click", () => {
            alerta.remove();
        });

        // Remove o alerta automaticamente após 5 segundos
        setTimeout(() => alerta.remove(), 5000);
    }

    // Limpar alertas anteriores
    function limparAlertas() {
        document.querySelectorAll(".alert").forEach(alerta => alerta.remove());
    }

    // Limpar campos de entrada após adicionar um item
    function limparCampos() {
        productNameInput.value = "";
        unitPriceInput.value = "";
        quantityInput.value = "";
    }

    // Eventos
    budgetInput.addEventListener("input", definirOrcamento);
    addItemButton.addEventListener("click", adicionarItem);
});
