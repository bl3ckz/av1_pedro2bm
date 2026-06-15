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

function textoOpcional(texto) {
  if (texto === undefined || texto === null) {
    return null;
  }

  const textoLimpo = String(texto).trim();
  return textoLimpo === "" ? null : textoLimpo;
}

function validarNumero(numero) {
  return typeof numero === "number" && !isNaN(numero);
}

function validarBooleano(valor) {
  return typeof valor === "boolean";
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
    dados.anoLancamento = Number(body.anoLancamento);
  }

  if (body.descricao !== undefined) {
    dados.descricao = textoOpcional(body.descricao);
  }

  if (body.nota !== undefined) {
    dados.nota = Number(body.nota);
  }

  if (body.duracao !== undefined) {
    dados.duracao = Number(body.duracao);
  }

  if (body.elenco !== undefined) {
    dados.elenco = textoOpcional(body.elenco);
  }

  if (body.classificacao !== undefined) {
    dados.classificacao = body.classificacao.trim();
  }

  if (body.imagem !== undefined) {
    dados.imagem = textoOpcional(body.imagem);
  }

  if (body.disponivel !== undefined) {
    dados.disponivel = Boolean(body.disponivel);
  }

  return dados;
}

function validarCamposFilme(body, { obrigatorios = [] } = {}) {
  const erros = [];

  // Validações obrigatórias
  if (obrigatorios.includes("titulo") && !validarTexto(body.titulo)) {
    erros.push("titulo é obrigatório e deve ser texto válido");
  }

  if (obrigatorios.includes("genero") && !validarTexto(body.genero)) {
    erros.push("genero é obrigatório e deve ser texto válido");
  }

  if (obrigatorios.includes("diretor") && !validarTexto(body.diretor)) {
    erros.push("diretor é obrigatório e deve ser texto válido");
  }

  if (obrigatorios.includes("anoLancamento") && !validarNumero(body.anoLancamento)) {
    erros.push("anoLancamento é obrigatório e deve ser número inteiro");
  }

  if (obrigatorios.includes("duracao") && !validarNumero(body.duracao)) {
    erros.push("duracao é obrigatória e deve ser número inteiro");
  }

  if (obrigatorios.includes("classificacao") && !validarTexto(body.classificacao)) {
    erros.push("classificacao é obrigatória e deve ser texto válido");
  }

  // Validações opcionais (quando presentes)
  if (body.titulo !== undefined && !validarTexto(body.titulo)) {
    erros.push("titulo deve ser texto válido");
  }

  if (body.genero !== undefined && !validarTexto(body.genero)) {
    erros.push("genero deve ser texto válido");
  }

  if (body.diretor !== undefined && !validarTexto(body.diretor)) {
    erros.push("diretor deve ser texto válido");
  }

  if (body.anoLancamento !== undefined && !validarNumero(body.anoLancamento)) {
    erros.push("anoLancamento deve ser número");
  }

  if (body.descricao !== undefined && String(body.descricao).trim() !== "" && !validarTexto(body.descricao)) {
    erros.push("descricao deve ser texto válido");
  }

  if (body.nota !== undefined && !validarNumero(body.nota)) {
    erros.push("nota deve ser número");
  }

  if (body.duracao !== undefined && !validarNumero(body.duracao)) {
    erros.push("duracao deve ser número");
  }

  if (body.elenco !== undefined && String(body.elenco).trim() !== "" && !validarTexto(body.elenco)) {
    erros.push("elenco deve ser texto válido");
  }

  if (body.classificacao !== undefined && !validarTexto(body.classificacao)) {
    erros.push("classificacao deve ser texto válido");
  }

  if (body.imagem !== undefined && String(body.imagem).trim() !== "" && !validarTexto(body.imagem)) {
    erros.push("imagem deve ser texto válido");
  }

  if (body.disponivel !== undefined && !validarBooleano(body.disponivel)) {
    erros.push("disponivel deve ser booleano");
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

export async function buscarPorGenero(req, res) {
  try {
    const { genero } = req.params;

    if (!validarTexto(genero)) {
      return res.status(400).json({ erro: "Gênero inválido" });
    }

    const filmes = await FilmeModel.buscarPorGenero(genero);
    return res.json(filmes);
  } catch (error) {
    console.error("Erro ao buscar filmes por gênero:", error);
    return res.status(500).json({ erro: "Erro interno ao buscar filmes por gênero" });
  }
}

export async function buscarPorTitulo(req, res) {
  try {
    const { titulo } = req.params;

    if (!validarTexto(titulo)) {
      return res.status(400).json({ erro: "Título inválido" });
    }

    const filmes = await FilmeModel.buscarPorTitulo(titulo);
    return res.json(filmes);
  } catch (error) {
    console.error("Erro ao buscar filmes por título:", error);
    return res.status(500).json({ erro: "Erro interno ao buscar filmes por título" });
  }
}

export async function criar(req, res) {
  try {
    const erros = validarCamposFilme(req.body, {
      obrigatorios: ["titulo", "genero", "diretor", "anoLancamento", "duracao", "classificacao"]
    });

    if (erros.length > 0) {
      return res.status(400).json({ erros });
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
      return res.status(400).json({ erros });
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
