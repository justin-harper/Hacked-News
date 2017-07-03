import $ from 'jquery';

class API {

    // constructor() {

    // };

    getTopStoriesIds(){
        return(
        $.ajax({
            url: " https://hacker-news.firebaseio.com/v0/topstories.json",
            dataType: 'json',
            cache: false,
            success: function(data) {
                return data;
            },
            error: function(xhr, stats, error) {
                console.error(error);
            }
        }));
    };

    getStoryById(context, id, callback) {
        $.ajax({
            url: "https://hacker-news.firebaseio.com/v0/item/" + id + ".json",
            dataType: 'json',
            cache: false,
            success: function(data){
                callback(data);
            },
            error: function(xhr, stats, error){
                console.error(error);
            }
        });
    };
}

export default API;