export interface Acontecimento {
    id: number;
    titulo: string;
    data: string;
    resumo: string;
    thumbnail: string;
    autor: string;
    categorias: any[];
    conteudo: string;
    palestrantes: Palestrante[];
    banner: string;
    mostrar_formulario: boolean;
}

export interface Palestrante {
    fotografia: string;
    nome: string;
    cargo: string;
    texto_apresentacao: string;
    data_apresentacao: string;
}