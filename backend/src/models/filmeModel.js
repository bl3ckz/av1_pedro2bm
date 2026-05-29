import { prisma } from "../config/prisma.js";

export async function listar() {
  return prisma.filme.findMany({
    orderBy: { id: "asc" }
  });
}

export async function buscarPorId(id) {
  return prisma.filme.findUnique({
    where: { id }
  });
}

export async function criar(dados) {
  return prisma.filme.create({
    data: dados
  });
}

export async function atualizar(id, dados) {
  try {
    return await prisma.filme.update({
      where: { id },
      data: dados
    });
  } catch (error) {
    if (error?.code === "P2025") {
      return null;
    }

    console.error("Erro ao atualizar filme:", error);
    throw error;
  }
}

export async function excluir(id) {
  try {
    return await prisma.filme.delete({
      where: { id }
    });
  } catch (error) {
    if (error?.code === "P2025") {
      return null;
    }

    console.error("Erro ao excluir filme:", error);
    throw error;
  }
}