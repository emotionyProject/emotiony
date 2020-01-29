export class Tag {
    constructor(
        public newTag: string,
        public ubicacion1?: string,
        public ubicacion2?: string,
        public language?: string,
        public startDate?: Date,
        public startTime?: string,
        public endDate?: Date,
        public endTime?: string,
        public hashtag?: string,
        public from?: string
    ) {}
}
