function updateLink(e) {
                var t = e.attr("src").replace("_Smaller", "");
                e.wrap($("<span>", {
                    id: "img-wrapper",
                    width: e.parent().width(),
                    height: e.parent().height()
                }))
             }
            
            function getImageData(e, t) {
                return new Array(e[t][0], e[t][1], e[t][2])
            }
            var bw_images = [
                ["Avery", "charcoal and graphite", "22 x 15"],
                ["Leap Day", "charcoal and carbon pencil", '17.5" x 14.25" - SOLD'],
                ["Island Fairy", "charcoal and carbon pencil", '10" x 10"'],
                ["Avery At The Window", "graphite", '18" x 14" - SOLD'],
                ["Nicholas", "graphite", '8" x 6" - SOLD'],
                ["From The Tower", "charcoal", '25" x 19" - SOLD'],
                ["A Light Breeze", "graphite", '10" x 10" - SOLD'],
                ["It's My Party", "charcoal", '19" x 27" - SOLD'],
                ["May 57", "graphite", '8" x 13" - SOLD'],
                ["Olivia", "colored pencil", '21" x 16"'],
                ["Thirteen", "graphite", '21" x 27"'],
                ["Haley", "graphite", '5" x 5" - SOLD'],
                ["Firstborn", "charcoal, carbon pencil, and graphite", '22" x 30"'],
                ["Winter Arbor", "graphite", '12" x 10"'],
                ["Second Chair", "colored pencil", '12" x 9"'],
                ["Tween Angel", "colored pencil", '12" x 9"'],
                ["Avery In Her Second Summer", "graphite", '17" x 12.5"'],
                ["The Marriage Bed", "graphite", '6" x 8" - SOLD'],
                ["Old Souls", "graphite", '10" x 6"']
            ];
            var color_images = [
                ["Distant Cousins", "colored pencil", '10" x 13" - SOLD'],
                ["Light Box", "colored pencil", '12" x 9" - SOLD'],
                ["Surf And Turf", "colored pencil", '12" x 9" - SOLD'],
                ["Origami", "colored pencil", '8" x 6" - SOLD'],
                ["High Clouds Over Broomgrass", "colored pencil and graphite", '25" x 16"'],
                ["Avery At Twelve In 1465", "graphite and oil on panel", '7" x 5" - SOLD'],
                ["Plate 122", "colored pencil", '8" x 10"'],
                ["Poster Child", "colored pencil and graphite", '21" x 14"'],
                ["Bag Lunch", "colored pencil", '10" x 7" - SOLD'],
                ["A Pear of Hands", "colored pencil", '11" x 13" - SOLD'],
                ["Four Fifteen Prince", "colored pencil", '11.5" x 11.5"'],
                ["Stone Faced", "colored pencil", '8" x 6" - SOLD'],
                ["South of King", "colored pencil", '10" x 10"'],
                ["Bridal Satin", "graphite and metallic watercolor", '18" x 13"']
            ];
            $(document).ready(function () {
                updateLink($("#gallery img").first());
                var e = 1;
                var t = 0;
                $("#gallery img").on({
                    click: function (t){
                        t.stopPropagation();
                        var name = getImageData(window.location.pathname == "/color" ? color_images : bw_images, e - 1)[0].        replace(/ /g,"");

                        window.open("/image/" + name);
                    },
                    mouseover: function () {
                        $("#info-strip").width($(this).width());
                        $("#info-strip").show();
                        $("#info-strip").html(function () {
                            var t = getImageData(window.location.pathname == "/color" ? color_images : bw_images, e - 1);
                            var n = t[0] + ", ";
                            return info = "<strong>" + n + "</strong>" + t.slice(1, 3).join(", ")
                        })
                    },
                    mouseout: function () {
                        $("#info-strip").hide()
                    }
                });
                $(".scroll-pane img").on({
                    click: function (t) {
                        t.stopPropagation();
                        var n = $(this).index() + 1;
                        if (n != e) {
                            e = n;
                            images = $("#gallery img"),
                            now = images.filter(":visible"),
                            next = $("#gallery > img:nth-child(" + e + ")"),
                            speed = 300;

                            now.fadeOut(speed);
                            now.unwrap();
                            next.fadeIn(speed);
                            updateLink(next)
                        }
                    },
                    mouseover: function () {
                        $("#info-strip").width($("#gallery img").filter(":visible").width());
                        t = $(this).index();
                        $("#info-strip").show();
                        $("#info-strip").html(function () {
                            var e = getImageData(window.location.pathname == "/color" ? color_images : bw_images, t);
                            var n = e[0] + ", ";
                            return info = "<strong>" + n + "</strong>" + e.slice(1, 3).join(", ")
                        })
                    },
                    mouseout: function () {
                        $("#info-strip").hide()
                    }
                })
            });