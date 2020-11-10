export interface ProductionCompany {
    readonly id?: number;
    readonly logo_path?: string;
    readonly name?: string;
    readonly origin_country?: string;
}

export interface ProductionCountry {
    readonly iso_3166_1?: string;
    readonly name?: string;
}

export interface Genrer {
    readonly id: number;
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

export interface Movie {
    readonly adult?: boolean;
    readonly backdrop_path?: string;
    readonly belongs_to_collection?: any;
    readonly budget?: number;
    readonly genres?: Genrer[];
    readonly homepage?: string;
    readonly id: number;
    readonly imdb_id?: string;
    readonly original_language?: string;
    readonly original_title?: string;
    readonly overview?: string;
    readonly popularity?: number;
    readonly poster_path?: string;
    readonly production_companies?: ProductionCompany[];
    readonly production_countries?: ProductionCountry[];
    readonly release_date: string;
    readonly revenue?: number;
    readonly runtime?: number;
    readonly spoken_languages?: SpokenLanguage[];
    readonly status?: string;
    readonly tagline?: string;
    readonly title: string;
    readonly video?: boolean;
    readonly vote_average?: number;
    readonly vote_count?: number;
    profit?: number;
}

export interface MovieInformation {
    readonly generator: 'time' | 'currency' | 'default';
    readonly title: string;
    readonly key: string;
}

export interface Paginate {
    readonly page: number;
    readonly total_results: number;
    readonly total_pages: number;
}
export interface MovieResponse {
    readonly page: number;
    readonly total_results: number;
    readonly total_pages: number;
    readonly results: MovieModel[];
}

export default MovieModel;