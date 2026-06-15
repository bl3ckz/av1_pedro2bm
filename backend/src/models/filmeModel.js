import { prisma } from "../config/prisma.js";

export async function listar() {
  return prisma.movie.findMany({
    orderBy: { id: "asc" }
  });
}

export async function buscarPorId(id) {
  return prisma.movie.findUnique({
    where: { id }
  });
}

export async function buscarPorGenero(genero) {
  return prisma.movie.findMany({
    where: {
      genero: {
        contains: genero,
        mode: "insensitive"
      }
    },
    orderBy: { titulo: "asc" }
  });
}

export async function buscarPorTitulo(titulo) {
  return prisma.movie.findMany({
    where: {
      titulo: {
        contains: titulo,
        mode: "insensitive"
      }
    },
    orderBy: { titulo: "asc" }
  });
}

export async function criar(dados) {
  return prisma.movie.create({
    data: dados
  });
}

export async function atualizar(id, dados) {
  try {
    return await prisma.movie.update({
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
    return await prisma.movie.delete({
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