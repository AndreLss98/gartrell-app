export interface Acontecimento {
    id: number;
    titulo: string;
    data: Date;
    resumo: string;
    thumbnail: string;
    autor: string;
    categorias: any[];
    conteudo: string;
    palestrantes: Palestrante[];
}

export interface Palestrante {
    fotografia: string;
    nome: string;
    cargo: string;
    texto_apresentacao: string;
    data_apresentacao: string;
}