import * as FilmeModel from "../models/filmeModel.js";

function validarId(idParam) {
  const id = Number(idParam);

  if (!Number.isInteger(id) || id <= 0) {
    return null;
  }

  return id;
}

function validarTexto(texto) {
  return typeof texto === "string" && texto.trim() !== "";
}

function montarDadosFilme(body) {
  const dados = {};

  if (body.titulo !== undefined) {
    dados.titulo = body.titulo.trim();
  }

  if (body.genero !== undefined) {
    dados.genero = body.genero.trim();
  }

  if (body.diretor !== undefined) {
    dados.diretor = body.diretor.trim();
  }

  if (body.anoLancamento !== undefined) {
    dados.anoLancamento = body.anoLancamento;
  }

  if (body.descricao !== undefined) {
    dados.descricao = body.descricao.trim();
  }

  if (body.nota !== undefined) {
    dados.nota = body.nota;
  }

  if (body.duracao !== undefined) {
    dados.duracao = body.duracao;
  }

  if (body.atorPrincipal !== undefined) {
    dados.atorPrincipal = body.atorPrincipal.trim();
  }

  if (body.pais !== undefined) {
    dados.pais = body.pais.trim();
  }

  return dados;
}

function validarCamposFilme(body, { obrigatorioTitulo = false } = {}) {
  const erros = [];

  if (obrigatorioTitulo && !validarTexto(body.titulo)) {
    erros.push("titulo é obrigatório");
  }

  if (body.genero !== undefined && !validarTexto(body.genero)) {
    erros.push("genero deve ser texto válido");
  }

  if (body.diretor !== undefined && !validarTexto(body.diretor)) {
    erros.push("diretor deve ser texto válido");
  }

  if (body.anoLancamento !== undefined && !Number.isInteger(body.anoLancamento)) {
    erros.push("anoLancamento deve ser inteiro");
  }

  if (body.descricao !== undefined && !validarTexto(body.descricao)) {
    erros.push("descricao deve ser texto válido");
  }

  if (body.nota !== undefined && typeof body.nota !== "number") {
    erros.push("nota deve ser número");
  }

  if (body.duracao !== undefined && !Number.isInteger(body.duracao)) {
    erros.push("duracao deve ser inteiro");
  }

  if (body.atorPrincipal !== undefined && !validarTexto(body.atorPrincipal)) {
    erros.push("atorPrincipal deve ser texto válido");
  }

  if (body.pais !== undefined && !validarTexto(body.pais)) {
    erros.push("pais deve ser texto válido");
  }

  return erros;
}

export async function listar(req, res) {
  try {
    const filmes = await FilmeModel.listar();
    return res.json(filmes);
  } catch (error) {
    console.error("Erro ao listar filmes:", error);
    return res.status(500).json({ erro: "Erro interno ao listar filmes" });
  }
}

export async function buscarPorId(req, res) {
  try {
    const id = validarId(req.params.id);

    if (id === null) {
      return res.status(400).json({ erro: "ID inválido" });
    }

    const filme = await FilmeModel.buscarPorId(id);

    if (!filme) {
      return res.status(404).json({ erro: "Filme não encontrado" });
    }

    return res.json(filme);
  } catch (error) {
    console.error("Erro ao buscar filme por ID:", error);
    return res.status(500).json({ erro: "Erro interno ao buscar filme" });
  }
}

export async function criar(req, res) {
  try {
    const erros = validarCamposFilme(req.body, { obrigatorioTitulo: true });

    if (erros.length > 0) {
      return res.status(400).json({ erro: erros.join(", ") });
    }

    const dados = montarDadosFilme(req.body);
    const filmeCriado = await FilmeModel.criar(dados);

    return res.status(201).json(filmeCriado);
  } catch (error) {
    console.error("Erro ao criar filme:", error);
    return res.status(500).json({ erro: "Erro interno ao criar filme" });
  }
}

export async function atualizar(req, res) {
  try {
    const id = validarId(req.params.id);

    if (id === null) {
      return res.status(400).json({ erro: "ID inválido" });
    }

    const dados = montarDadosFilme(req.body);
    const erros = validarCamposFilme(req.body);

    if (Object.keys(dados).length === 0) {
      return res.status(400).json({ erro: "Informe ao menos um campo para atualizar" });
    }

    if (erros.length > 0) {
      return res.status(400).json({ erro: erros.join(", ") });
    }

    const filmeAtualizado = await FilmeModel.atualizar(id, dados);

    if (!filmeAtualizado) {
      return res.status(404).json({ erro: "Filme não encontrado" });
    }

    return res.json(filmeAtualizado);
  } catch (error) {
    console.error("Erro ao atualizar filme:", error);
    return res.status(500).json({ erro: "Erro interno ao atualizar filme" });
  }
}

export async function excluir(req, res) {
  try {
    const id = validarId(req.params.id);

    if (id === null) {
      return res.status(400).json({ erro: "ID inválido" });
    }

    const filmeExcluido = await FilmeModel.excluir(id);

    if (!filmeExcluido) {
      return res.status(404).json({ erro: "Filme não encontrado" });
    }

    return res.json(filmeExcluido);
  } catch (error) {
    console.error("Erro ao excluir filme:", error);
    return res.status(500).json({ erro: "Erro interno ao excluir filme" });
  }
}