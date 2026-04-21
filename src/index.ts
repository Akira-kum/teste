import promptSync from "prompt-sync";
import { v4 as uuidv4 } from "uuid";
import { db } from "./db";
import { uf, cidade, regiao } from "./db/schema";
import { eq } from "drizzle-orm";

const prompt = promptSync();

// ================= MENU =================

async function menu() {
  let op: string;

  do {
    console.log("\n===== MENU =====");
    console.log("1 - UF");
    console.log("2 - Cidade");
    console.log("3 - Região");
    console.log("0 - Sair");

    op = prompt("Escolha: ");

    switch (op) {
      case "1": await menuUF(); break;
      case "2": await menuCidade(); break;
      case "3": await menuRegiao(); break;
    }

  } while (op !== "0");
}

// ================= UF =================

async function menuUF() {
  let op: string;

  do {
    console.log("\n--- UF ---");
    console.log("1 - Criar");
    console.log("2 - Listar");
    console.log("3 - Editar");
    console.log("4 - Deletar");
    console.log("0 - Voltar");

    op = prompt("Escolha: ");

    switch (op) {
      case "1": await criarUF(); break;
      case "2": await listarUF(); break;
      case "3": await editarUF(); break;
      case "4": await deletarUF(); break;
    }

  } while (op !== "0");
}

async function criarUF() {
  const nome = prompt("Nome: ");
  const sigla = prompt("Sigla: ");

  await db.insert(uf).values({
    id: uuidv4(),
    nome,
    sigla,
  });

  console.log("UF criada!");
}

async function listarUF() {
  const lista = await db.select().from(uf);

  console.log("\n--- UFs ---");
  lista.forEach(u => {
    console.log(`${u.id} | ${u.nome} (${u.sigla})`);
  });
}

async function editarUF() {
  await listarUF();
  const id = prompt("ID: ");

  const nome = prompt("Novo nome: ");
  const sigla = prompt("Nova sigla: ");

  await db.update(uf)
    .set({ nome, sigla })
    .where(eq(uf.id, id));

  console.log("Atualizado!");
}

async function deletarUF() {
  await listarUF();
  const id = prompt("ID: ");

  await db.delete(uf)
    .where(eq(uf.id, id));

  console.log("Removido!");
}

// ================= CIDADE =================

async function menuCidade() {
  let op: string;

  do {
    console.log("\n--- Cidade ---");
    console.log("1 - Criar");
    console.log("2 - Listar");
    console.log("3 - Editar");
    console.log("4 - Deletar");
    console.log("0 - Voltar");

    op = prompt("Escolha: ");

    switch (op) {
      case "1": await criarCidade(); break;
      case "2": await listarCidade(); break;
      case "3": await editarCidade(); break;
      case "4": await deletarCidade(); break;
    }

  } while (op !== "0");
}

async function criarCidade() {
  await listarUF();
  const nome = prompt("Nome: ");
  const uf_id = prompt("UF ID: ");

  await db.insert(cidade).values({
    id: uuidv4(),
    nome,
    uf_id,
  });

  console.log("Cidade criada!");
}

async function listarCidade() {
  const lista = await db.select().from(cidade);

  console.log("\n--- Cidades ---");
  lista.forEach(c => {
    console.log(`${c.id} | ${c.nome} | UF: ${c.uf_id}`);
  });
}

async function editarCidade() {
  await listarCidade();
  const id = prompt("ID: ");

  const nome = prompt("Novo nome: ");
  await listarUF();
  const uf_id = prompt("Novo UF ID: ");

  await db.update(cidade)
    .set({ nome, uf_id })
    .where(eq(cidade.id, id));

  console.log("Atualizado!");
}

async function deletarCidade() {
  await listarCidade();
  const id = prompt("ID: ");

  await db.delete(cidade)
    .where(eq(cidade.id, id));

  console.log("Removido!");
}

// ================= REGIÃO =================

async function menuRegiao() {
  let op: string;

  do {
    console.log("\n--- Região ---");
    console.log("1 - Criar");
    console.log("2 - Listar");
    console.log("3 - Editar");
    console.log("4 - Deletar");
    console.log("0 - Voltar");

    op = prompt("Escolha: ");

    switch (op) {
      case "1": await criarRegiao(); break;
      case "2": await listarRegiao(); break;
      case "3": await editarRegiao(); break;
      case "4": await deletarRegiao(); break;
    }

  } while (op !== "0");
}

async function criarRegiao() {
  await listarCidade();
  const nome = prompt("Nome: ");
  const cidade_id = prompt("Cidade ID: ");

  await db.insert(regiao).values({
    id: uuidv4(),
    nome,
    cidade_id,
  });

  console.log("Região criada!");
}

async function listarRegiao() {
  const lista = await db.select().from(regiao);

  console.log("\n--- Regiões ---");
  lista.forEach(r => {
    console.log(`${r.id} | ${r.nome} | Cidade: ${r.cidade_id}`);
  });
}

async function editarRegiao() {
  await listarRegiao();
  const id = prompt("ID: ");

  const nome = prompt("Novo nome: ");
  await listarCidade();
  const cidade_id = prompt("Nova Cidade ID: ");

  await db.update(regiao)
    .set({ nome, cidade_id })
    .where(eq(regiao.id, id));

  console.log("Atualizado!");
}

async function deletarRegiao() {
  await listarRegiao();
  const id = prompt("ID: ");

  await db.delete(regiao)
    .where(eq(regiao.id, id));

  console.log("Removido!");
}

// EXECUTAR
menu();