/*jsl:option explicit*/

var cyberDojo = (function($cd, $j) {
  
  $cd.id = function(name) {
    return $j('[id="' + name + '"]');
  };

  //- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  
  $cd.inArray = function(find, array) {
    return $j.inArray(find, array) !== -1;    
  };
  
  //- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  $cd.node = function(name,content) {
    return '<'+name+'>'
          +  content
	  +'</'+name+'>';
  };

  //- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  $cd.makeTable = function() {
    var i, max, content = '';
    for (i = 0, max = arguments.length; i < max; i += 1) {
      content += $cd.node('td', arguments[i]);
    }
    return $cd.node('table', $cd.node('tr', content));
  };

  //- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  $cd.centeredDiv = function(node) {
    var div = $j('<div>', {
     align: 'center' 
    });
    div.append(node);
    return div;
  };

  //- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  $cd.avatarImage = function(avatarName, imageSize) {
    return $j('<img>', {
       alt: avatarName,
      'class': "avatar_image",
      'height': imageSize,
      'width': imageSize,
       src: "/images/avatars/" + avatarName + ".jpg",
       title: avatarName
    });
  };

  //- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  $cd.divPanel = function(content) {
    return '<div class="panel">' + content + '</div>';
  };

  //- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  $cd.h1 = function(title) {
    return $cd.node('h1',title);
  };
  
  //- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  $cd.h2 = function(title) {
    return $cd.node('h2',title);
  };
  
  //- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  $cd.fakeFilenameButton = function(filename) {
    return $cd.makeTable(''
      + '<div class="filename selected">'
      +   '<input style="display:none;"'
      +         ' type="radio"'
      +         ' name="filename' + filename + '"'
      +         ' checked="checked"'
      +         ' value="filename"/>'
      +   '<label>' + filename + '</label>'
      + '</div>');
  };
  
  return $cd;
})(cyberDojo || {}, $);



