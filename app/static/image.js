(function(){
                // if firefox 3.5+, hide content till load (or 3 seconds) to prevent FOUT
                var d = document, e = d.documentElement, s = d.createElement('style');
                if (e.style.MozTransform === ''){ // gecko 1.9.1 inference
                    s.textContent = 'body{visibility:hidden}';
                    var r = document.getElementsByTagName('script')[0];
                    r.parentNode.insertBefore(s, r);
                    function f(){ s.parentNode && s.parentNode.removeChild(s);}
                    addEventListener('load',f,false);
                    setTimeout(f,3000);
                }
            })();

            /*
             * CSS viewport units with jQuery
             * http://www.w3.org/TR/css3-values/#viewport-relative-lengths
             */
            function convertVh( $, window ){
            
              var $win = $(window)
                , _css = $.fn.css;
            
              function viewportToPixel( val ) {
                var percent = val.match(/[\d.]+/)[0] / 100
                  , unit = val.match(/[vwh]+/)[0];
                return (unit == 'vh' ? $win.height() : $win.width()) * percent +'px';
              }
            
              function parseProps( props ) {
                var p, prop;
                for ( p in props ) {
                  prop = props[ p ];
                  if ( /[vwh]$/.test( prop ) ) {
                    props[ p ] = viewportToPixel( prop );
                  }
                }
                return props;
              }
            
              $.fn.css = function( props ) {
                var self = this
                  , update = function() {
                      return _css.call( self, parseProps( $.extend( {}, props ) ) );
                    };
                $win.resize( update ).resize();
                return update();
              };
            }

            $(document).ready(function(){
                convertVh($, window);
                $('img').css({'max-height' : '97vh'});
                var clicked = false;

                $('img').click(function(){
                    if (clicked == false){
                        $(this).css({'max-height' : 'none','width' : '100%', 'cursor' : 'zoom-out'});
                        clicked = true;
                    }
                    else{
                        $(this).css({'max-height' : '97vh','width' : 'auto', 'cursor' : 'zoom-in'});
                        clicked = false;
                    }
                });
            });