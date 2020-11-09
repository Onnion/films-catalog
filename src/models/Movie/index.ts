export interface ProductionCompany {
    readonly id?: number,
    readonly logo_path?: string;
    readonly name?: string;
    readonly origin_country?: string;
}

export interface ProductionCountry {
    readonly iso_3166_1?: string;
    readonly name?: string;
}

export interface Genrer {
    readonly id: number,
    readonly name: string;
}

export interface SpokenLanguage {
    readonly iso_639_1?: string;
    readonly name?: string;
}

export interface MovieModel {
    readonly adult: boolean;
    readonly backdrop_path: string;
    readonly genre_ids: number[];
    readonly genres?: Genrer[];
    readonly id: number;
    readonly original_language: string;
    readonly original_title: string;
    readonly overview: string;
    readonly popularity: number;
    readonly poster_path: string;
    readonly release_date: string;
    readonly title: string;
    readonly video: boolean;
    readonly vote_average: number;
    readonly vote_count: number;
}

export interface Paginate {
    readonly page: number,
    readonly total_results: number,
    readonly total_pages: number,
}

export interface MovieResponse {
    readonly page: number,
    readonly total_results: number,
    readonly total_pages: number,
    readonly results: MovieModel[]
}

export default MovieModel;