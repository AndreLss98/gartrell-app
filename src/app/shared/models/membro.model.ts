import { Sexo } from "../enums/sexo.enum";
import { TipoMembro } from "../enums/tipo-membro.enum";

export interface Membro {
    id: number;
    titulo: string;
    cargo: string;
    sexo: Sexo;
    sobre: string;
    fotografia: string;
    equipe: TipoMembro;
    realiza_consulta: boolean;
    horario_de_atendimento: string;
}