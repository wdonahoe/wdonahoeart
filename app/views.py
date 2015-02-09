from flask import render_template
from app import app

url = "http://5279f0c1a4138f10bed8-3dc10a7c26bad057c08ae0fa5a5f3941.r93.cf5.rackcdn.com/"
bw = [
"DeerIsleCottage",
"Daydreams",
"Avery",
"LeapDay",
"IslandFairy",
"AveryAtTheWindow",
"Nicholas",
"FromTheTower",
"ALightBreeze",
"It'sMyParty",
"May57",
"Olivia",
"Thirteen",
"Haley",
"Firstborn",
"WinterArbor",
"SecondChair",
"TweenAngel",
"AveryInHerSecondSummer",
"TheMarriageBed",
"OldSouls"]

color = [
"DistantCousins",
"SurfAndTurf",
"Origami",
"HighCloudsOverBroomgrass",
"AveryAtTwelveIn1465",
"Plate122",
"PosterChild",
"BagLunch",
"APearofHands",
"FourFifteenPrince",
"StoneFaced",
"SouthofKing",
"BridalSatin"]


def gallery(slider_urls, gallery_urls):
    return render_template("gallery2.html",
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
    return gallery([url + img + "_Gallery_Thumbnail.jpg" for img in bw],
                   [url + img + "_Gallery_Smaller.jpg" for img in bw])
        
@app.route('/color')
def gallery2():
    return gallery([url + img + "_Gallery_Thumbnail.jpg" for img in color],
                   [url + img + "_Gallery_Smaller.jpg" for img in color])
  
@app.route('/bio')
def bio():
    return render_template("biography.html")
    
@app.route('/cv')
def cv():
    return render_template("curiculum.html")
    
@app.route('/contact')
def contact():
    return render_template("contact.html")

@app.route('/image/<img_name>')
def image(img_name = None):
    return render_template("image.html", image = url + img_name + "_Gallery.jpg", name = img_name)
    
