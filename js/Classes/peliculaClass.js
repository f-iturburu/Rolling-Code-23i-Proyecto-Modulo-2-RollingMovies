class Movie {

    constructor(code,name,category,description,imgURL,imgURLFeatured,videoURL){

        this.code = code;
        this.name = name;
        this.category = category;
        this.description = description;
        this.published = true;
        this.img = imgURL;
        this.imgURLFeatured = imgURLFeatured;
        this.featured = false;
        this.videoURL = videoURL
        
    }

}



export {Movie}