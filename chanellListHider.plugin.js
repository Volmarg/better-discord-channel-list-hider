//META{"name":"ChanellListHider"}*//

function ChanellListHider(){}

ChanellListHider.prototype.getName = function() {
    return "Chanel list hider";
};
ChanellListHider.prototype.getDescription = function() {
    return "Adds button for toggling chanel list visibility";
};
ChanellListHider.prototype.getVersion = function() {
    return "1.0";
};
ChanellListHider.prototype.getAuthor = function() {
    return "Volmarg Reiso";
};
ChanellListHider.prototype.onSwitch = function() {
  	chanellListHider.initialize();
};
ChanellListHider.prototype.start = function() {
  	chanellListHider.initialize();
};
ChanellListHider.prototype.stop = function() {
  	chanellListHider.destroy();
};
ChanellListHider.prototype.getSettingsPanel = function() {
    return null;
};

var chanellListHider={
  initialize:function(){
  if($('#chanellListHider').length !== 0){
    return;
  }

  let button = this.createButton();
  this.attachButton(button);
  this.attachButtonFunctionality(button);
  },
  destroy:function(){
    $('#chanellListHider').remove();
  },
  createButton:function(){
    return $('<span tabindex="0" class="iconMargin-2YXk4F da-iconMargin" role="button" style="font-size:23px; data-toggle="on" id="chanellListHider">📖</span>');
  },
  attachButton:function(button){
    $('.da-headerBar').find('.da-flex').first().prepend(button);
  },
  attachButtonFunctionality:function(button){
    $(button).click(()=>{
      $('.da-channels').toggle();

      if($(button).attr('data-toggle')==='on'){
        $(button).css({opacity:'1'});
        $(button).attr('data-toggle','off');
        return;
      }

      $(button).css({opacity:'0.5'});
      $(button).attr('data-toggle','on');
      return;
    });
  },
}
