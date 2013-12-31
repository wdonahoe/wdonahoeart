var ImageData = Class.extend({
    init: function(id, title, medium, height, width){
        this.id = id;
        this.title = title;
        this.medium = medium;
        this.height = height;
        this.width = width;
    },
    getId: function(){
        return this.id;
    },
    getTitle: function(){
        return this.title;
    },
    getMedium: function(){
        return this.medium;
    },
    getHeight: function(){
        return this.height;
    },
    getWidth: function(){
        return this.width;
    }
});
