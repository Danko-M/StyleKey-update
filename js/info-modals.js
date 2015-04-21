/* 
Author: Danko Milutinovic
Desctiption: 
  This jQuery code is for modal windows which 
  appears on pages: measurements-men.html 
  and measurements-women.html
Contact:  dankomilutinovic@gmail.com, 
          https://rs.linkedin.com/pub/danko-milutinovic/a3/675/778 
*/

$(function () {
  var modalSettings = {
    effect : 'fadein',
    overlayColor :'#fff',
    overlayOpacity :'0.5'
  };  

  var $infoModalsItems = $('a.info-btn');

  $infoModalsItems.on('click', function ( e ) {
    $.fn.custombox( this, modalSettings);
    e.preventDefault();
  });

});