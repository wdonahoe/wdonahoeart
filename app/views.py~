from flask import render_template
from app import app

bw_gallery_urls = ["http://5279f0c1a4138f10bed8-3dc10a7c26bad057c08ae0fa5a5f3941.r93.cf5.rackcdn.com/Thirteen_Gallery_Smaller.jpg","http://5279f0c1a4138f10bed8-3dc10a7c26bad057c08ae0fa5a5f3941.r93.cf5.rackcdn.com/TheMarriageBed_Gallery_Smaller.jpg","http://5279f0c1a4138f10bed8-3dc10a7c26bad057c08ae0fa5a5f3941.r93.cf5.rackcdn.com/Second_Chair_Gallery_Smaller.jpg","http://5279f0c1a4138f10bed8-3dc10a7c26bad057c08ae0fa5a5f3941.r93.cf5.rackcdn.com/Olivia_Gallery_Smaller.jpg","http://5279f0c1a4138f10bed8-3dc10a7c26bad057c08ae0fa5a5f3941.r93.cf5.rackcdn.com/IslandFairy_Gallery_Smaller.jpg","http://5279f0c1a4138f10bed8-3dc10a7c26bad057c08ae0fa5a5f3941.r93.cf5.rackcdn.com/Haley_Gallery_Smaller.jpg"]
bw_slider_urls = ["http://5279f0c1a4138f10bed8-3dc10a7c26bad057c08ae0fa5a5f3941.r93.cf5.rackcdn.com/Thirteen_Gallery_Thumbnail.jpg","http://5279f0c1a4138f10bed8-3dc10a7c26bad057c08ae0fa5a5f3941.r93.cf5.rackcdn.com/TheMarriageBed_Gallery_Thumbnail.jpg","http://5279f0c1a4138f10bed8-3dc10a7c26bad057c08ae0fa5a5f3941.r93.cf5.rackcdn.com/Second_Chair_Gallery_Thumbnail.jpg","http://5279f0c1a4138f10bed8-3dc10a7c26bad057c08ae0fa5a5f3941.r93.cf5.rackcdn.com/Olivia_Gallery_Thumbnail.jpg","http://5279f0c1a4138f10bed8-3dc10a7c26bad057c08ae0fa5a5f3941.r93.cf5.rackcdn.com/IslandFairy_Gallery_Thumbnail.jpg","http://5279f0c1a4138f10bed8-3dc10a7c26bad057c08ae0fa5a5f3941.r93.cf5.rackcdn.com/Haley_Gallery_Thumbnail.jpg"]
color_gallery_urls = ["http://5279f0c1a4138f10bed8-3dc10a7c26bad057c08ae0fa5a5f3941.r93.cf5.rackcdn.com/A_Pair_of_Hands_Gallery_Smaller.jpg","http://5279f0c1a4138f10bed8-3dc10a7c26bad057c08ae0fa5a5f3941.r93.cf5.rackcdn.com/DistantCousins_Gallery_Smaller.jpg","http://5279f0c1a4138f10bed8-3dc10a7c26bad057c08ae0fa5a5f3941.r93.cf5.rackcdn.com/StoneFaced_Gallery_Smaller.jpg","http://5279f0c1a4138f10bed8-3dc10a7c26bad057c08ae0fa5a5f3941.r93.cf5.rackcdn.com/SurfAndTurf_Gallery_Smaller.jpg","http://5279f0c1a4138f10bed8-3dc10a7c26bad057c08ae0fa5a5f3941.r93.cf5.rackcdn.com/Bag_Lunch_Gallery_Smaller.jpg","http://5279f0c1a4138f10bed8-3dc10a7c26bad057c08ae0fa5a5f3941.r93.cf5.rackcdn.com/FourFifteenPrince_Gallery_Smaller.jpg"]
color_slider_urls = ["http://5279f0c1a4138f10bed8-3dc10a7c26bad057c08ae0fa5a5f3941.r93.cf5.rackcdn.com/A_Pair_of_Hands_Gallery_Thumbnail.jpg","http://5279f0c1a4138f10bed8-3dc10a7c26bad057c08ae0fa5a5f3941.r93.cf5.rackcdn.com/DistantCousins_Gallery_Thumbnail.jpg","http://5279f0c1a4138f10bed8-3dc10a7c26bad057c08ae0fa5a5f3941.r93.cf5.rackcdn.com/StoneFaced_Gallery_Thumbnail.jpg","http://5279f0c1a4138f10bed8-3dc10a7c26bad057c08ae0fa5a5f3941.r93.cf5.rackcdn.com/SurfAndTurf_Gallery_Thumbnail.jpg","http://5279f0c1a4138f10bed8-3dc10a7c26bad057c08ae0fa5a5f3941.r93.cf5.rackcdn.com/Bag_Lunch_Gallery_Thumbnail.jpg","http://5279f0c1a4138f10bed8-3dc10a7c26bad057c08ae0fa5a5f3941.r93.cf5.rackcdn.com/FourFifteenPrince_Gallery_Thumbnail.jpg"]


def gallery(slider_urls, gallery_urls):
    return render_template("gallery.html",
     slider_urls = slider_urls,
     gallery_urls = gallery_urls)
     
@app.route('/')
@app.route('/index')
def index():
    return render_template("index.html")
    
@app.route('/home')
def home():
    return render_template("home.html")
    
@app.route('/shades_of_gray')
def gallery1():
    return gallery(bw_slider_urls, bw_gallery_urls)
        
@app.route('/color')
def gallery2():
    return gallery(color_slider_urls, color_gallery_urls)
    
@app.route('/bio')
def home():
    return render_template("bio.html")
    
@app.route('/cv')
def home():
    return render_template("cv.html")
    
