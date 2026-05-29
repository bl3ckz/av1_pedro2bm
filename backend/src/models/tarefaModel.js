// ========================================
// MODEL - CAMADA DE DADOS
// ========================================
// Esta camada conversa diretamente com o Prisma.

import { prisma } from "../config/prisma.js";

/**
 * Retorna todas as tarefas cadastradas.
 * @returns {Promise<Array>}
 */
export function obterTodasTarefas() {
  return prisma.tarefa.findMany({
    orderBy: { id: "asc" }
  });
}

/**
 * Procura uma tarefa específica pelo id.
 * @param {number} id
 * @returns {Promise<Object|null>}
 */
export function obterTarefaPorId(id) {
  return prisma.tarefa.findUnique({
    where: { id }
  });
}

/**
 * Cria uma nova tarefa.
 * @param {string} descricao
 * @returns {Promise<Object>}
 */
export function criarNovaTarefa(descricao) {
  return prisma.tarefa.create({
    data: {
      descricao: descricao.trim()
    }
  });
}

/**
 * Atualiza uma tarefa existente.
 * @param {number} id
 * @param {string} novaDescricao
 * @param {boolean} novoStatus
 * @returns {Promise<Object|null>}
 */
export async function atualizarTarefa(id, novaDescricao, novoStatus) {
  const tarefaExistente = await prisma.tarefa.findUnique({
    where: { id }
  });

  if (!tarefaExistente) {
    return null;
  }

  const dadosAtualizacao = {};

  if (novaDescricao !== undefined) {
    dadosAtualizacao.descricao = novaDescricao.trim();
  }

  if (novoStatus !== undefined) {
    dadosAtualizacao.concluida = novoStatus;
  }

  return prisma.tarefa.update({
    where: { id },
    data: dadosAtualizacao
  });
}

/**
 * Exclui uma tarefa pelo id.
 * @param {number} id
 * @returns {Promise<Object|null>}
 */
export async function excluirTarefa(id) {
  const tarefaExistente = await prisma.tarefa.findUnique({
    where: { id }
  });

  if (!tarefaExistente) {
    return null;
  }

  return prisma.tarefa.delete({
    where: { id }
  });
}
